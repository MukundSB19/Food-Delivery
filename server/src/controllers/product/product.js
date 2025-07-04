import { Product } from "../../models/index.js"; //! we have import this so that we can easily use queries like .find() , .create() , .delete()

export const getProductByCategoryId = async (req, reply) => {  //! this function is used to get all the products that belong to a specific category - like all burger items when the user clicks the burger tab 
  const { categoryId } = req.params;

  try {
    const products = await Product.find({ category: categoryId }) //! this will find all products with the same category ID and the category iD will be in mongo DB file
      .select("-category") //! this code tells give me all fields except the category field then everything will be display like name price quantity but not the category  //! (-) means exclude
      .exec(); //! This simply runs the query Technically not required if you're using await, but it's often used for clarity or chaining.

    return reply.send(products);
  } catch (error) {
    return reply.status(500).send({ message: "No error occurred", error });
  }
};
