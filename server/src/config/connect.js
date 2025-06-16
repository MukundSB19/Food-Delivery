// !this file is used to connect our app to mongoDB database and using the library called mongoose

import mongoose from "mongoose";

export const connectDB = async (uri) => {
  // ! here we have created a function and (uri) is the database link from .env file
  try {
    await mongoose.connect(uri);   //! this code is helping us to connect to the mongoDB using the given URI
    console.log("DB CONNECTED");
  } catch (error) {
    console.log("Database connection error:  ", error); 
  }
};
