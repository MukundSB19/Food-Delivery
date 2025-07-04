import { Customer, DeliveryPartner } from "../../models/index.js";

export const updateUser = async (req, reply) => {
  //!This function allows an authenticated user (customer or delivery partner) to update their own profile using data from the frontend.
  try {
    const { userId } = req.user; //! it will get the userId and role
    const updateData = req.body; //! it contains the fields the user wants to update

    let user =
      (await Customer.findById(userId)) || //! this will find user first then delivery partner
      (await DeliveryPartner.findById(userId));

    if (!user) {
      return reply.status(404).send({ message: "User not found" });
    }

    let UserModel; //!Prepares a variable to dynamically hold the correct model (Customer or DeliveryPartner), based on user role.

    if (user.role === "Customer") {
      UserModel = Customer;
    } else if (user.role === "DeliveryPartner") {
      UserModel = DeliveryPartner;
    } else {
      return reply.status(400).send({ message: "Invalid user role" });
    }

    const updatedUser = await UserModel.findByIdAndUpdate(  //!This actually updates the user's data in the database.
      userId, //! this parameter will tell mongo find the user whose id is this value
      { $set: updateData }, //! $set is a mongo operator it means only update these fields So if updateData = { name: "Mukund", phone: "9876..." }, then only name and phone will be updated.
      { new: true, runValidators: true } //! first parameter will return the updated document instead of the old one
      //! second parameter will Make sure the updated data still follows your schema rules
    );

    if (!updatedUser) {
      return reply.status(404).send({ message: "User not found" });
    }

    return reply.send({
      message: "User Updated Successfully",
      user: updatedUser,
    });
  } catch (error) {
    return reply.status(500).send({ message: "Failed to update user", error });
  }
};
