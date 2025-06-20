import { Category } from "../../models/index.js";

export const getAllCategories = async (req, reply) => {  //! this function will fetch all categories from the data base and sends them to the frontend
  try {
    const categories = await Category.find();   //! this line is finding data from category.js in models file
    return reply.send(categories);
  } catch (error) {
    return reply.status(500).send({ message: "An error occured", error });
  }
};
