import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    sku: Number,
    name: String,
    price: Number,
    image: String,
    stock: Number,
  },
  { timestamps: true }
);

const ProductModel = model("products", ProductSchema);

export { ProductModel, ProductSchema };
