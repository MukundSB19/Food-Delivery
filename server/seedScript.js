import "dotenv/config.js";
import mongoose from "mongoose";
import { categories, products } from "./seedData.js";
import { Category, Product } from "./src/models/index.js";

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({});
    await Category.deleteMany({});

    const categoryDocs = await Category.insertMany(categories);

    const categoryMap = categoryDocs.reduce((map, category) => {
      map[category.name] = category._id;
      return map;
    }, {});

    const prodeuctWithCategoryIds = products.map((product) => ({
      ...product,
      category: categoryMap(product.category),
    }));

    await Product.insertMany(prodeuctWithCategoryIds);

    console.log("Database Seeded Successfully");
  } catch (error) {
    console.log("Error Seeding Database");
  } finally {
    mongoose.connection.close();
  }
}
