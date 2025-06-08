import { Category } from "../../models/index.js";

export const getAllCategories = async (requestAnimationFrame, reply) => {
    try {
        const categories = await Category.find();
        return reply.send(categories);
    } catch (error) {
        return reply.status(500).send({ message: "An error occured", error });
    }
}