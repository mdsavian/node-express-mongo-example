import { Schema, model } from "mongoose";

const CustomerSchema = new Schema({
  name: String,
  lastName: String,
  phoneNumber: String,
  age: Number,
});

const CustomerModel = model("Customers", CustomerSchema);

export default CustomerModel;
