import { Schema, model } from "mongoose";
import { ProductSchema } from "./Product";

const OrderSchema = new Schema(
  {
    number: Number,
    total: String,
    products: [ProductSchema],
  },
  { timestamps: true }
);

const OrderModel = model("orders", OrderSchema);

export { OrderModel };
