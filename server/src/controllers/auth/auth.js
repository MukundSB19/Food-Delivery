//! this file handles the auth process of this app and why is this file inside controller folder because controller folder is the brain of this app

import { Customer, DeliveryPartner } from "../../models/user.js"; // ! we are importing user models to interact with Mongo DB
import jwt from "jsonwebtoken"; //! this is for creating secure login tokens
import bcrypt from "bcrypt";


const generateTokens = (user) => {
  //! this function is creating tokens for auth
  const accessToken = jwt.sign(    //! this will create access token and this is used to access protected routes (expires in 1 day)
    { userId: user._id, role: user.role },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" }
  );

  const refreshToken = jwt.sign(   //! this will create refresh token and this is used to get a new access token is it expires
    { userId: user._id, role: user.role },  //! this is here so system knows who the user is and what they can access
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
  return { accessToken, refreshToken };
};

export const loginCustomer = async (req, reply) => {   //! this is for customers login 
  try {
    const { phone } = req.body;  //! this line helps us to get the phone number
    let customer = await Customer.findOne({ phone }); //! and it will find that phone number in MongoDb file 

    if (!customer) {    //! this will help to if user number was not found it will create a new one
      customer = new Customer({
        phone,
        role: "Customer",
        isActivated: true,
      });
    }
    const { accessToken, refreshToken } = generateTokens(customer);  //! it will give the tokens to the user
    return reply.send({
      message: "Login Sucessful",
      accessToken,
      refreshToken,
      customer,
    });
  } catch (error) {
    return reply.status(500).send({ message: "An error occurred", error });
  }

  //! this is called login with auto-register if the user doesn't exist they are created automatically
};

export const loginDeliveryPartner = async (req, reply) => { //! this is for delivery partners 
  try {
    const { email, password } = req.body; //! you are getting email and password 
    const deliveryPartner = await DeliveryPartner.findOne({ email }); //! this is again searching the credentials from data base of mongo db

    if (!deliveryPartner) {
      return reply.status(404).send({ message: "Delivery Partner not found" }); //! if data doesn't found then not found
    }

    // const isMatch = password === deliveryPartner.password; //! this will compare the entered password from the data base also this is the wrong way of using that because password should be hashed so instead use this 

    const isMatch = await bcrypt.compare(password, deliveryPartner.password); // ! this will make your password hashed

    if (!isMatch) {
      return reply.status(400).send({  //! if did not match then send this message
        message: "Invalid Credentials", 
      });
    }
    const { accessToken, refreshToken } = generateTokens(deliveryPartner);   
    return reply.send({
      message: "Login Successful",
      accessToken,
      refreshToken,
      deliveryPartner,
    });
  } catch (error) {
    return reply.status(500).send({ message: "An error Occurred", error });
  }
};

export const refreshToken = async (req, reply) => {  
  const { refreshToken } = req.body;  // ! you are extracting the refresh Token from the user 

  if (!refreshToken) { 
    return reply.status(401).send({
      // ! If the refresh token is missing, return a 401 (unauthorized) error We can't trust the client without it.
      message: "Refresh token required",
    });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    let user;

    if (decoded.role === "Customer") {
      user = await Customer.findById(decoded.userId);
    } else if (decoded.role === "DeliveryPartner") {
      user = await DeliveryPartner.findById(decoded.userId);
    } else {
      return reply.status(403).send({ message: "Invalid Role" });
    }
    if (!user) {
      return reply.status(403).send({ message: "User not Found" });
    }
    const { accessToken, refreshToken: newRefreshToken } = generateTokens(user);

    return reply.send({
      message: "Token Refreshed",
      accessToken,
      refreshToken: newRefreshToken,
    });
  } catch (error) {
    return reply.status(403).send({ message: "Inavlid Refresh Token" });
  }
};

export const fetchUser = async (req, reply) => {
  try {
    const { userId, role } = req.user;
    let user;

    if (role === "Customer") {
      user = await Customer.findById(userId);
    } else if (role === "DeliveryPartner") {
      user = await DeliveryPartner.findById(userId);
    } else {
      return reply.status(403).send({ message: "Invalid Role" });
    }
    if (!user) {
      return reply.status(404).send({ message: "User not found" });
    }

    return reply.send({
      message: "User Fetched Succesfully",
      user,
    });
  } catch (error) {
    return reply.status(500).send({ message: "an error occured", error });
  }
};
