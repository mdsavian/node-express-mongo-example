import mongoose, { Schema } from "mongoose";

const GradesSchema = new Schema(
  {
    grade: String,
    date: Date,
    score: Number,
  },
  {
    _id: false,
  }
);

const RestaurantSchema = new Schema({
  address: {
    building: String,
    coord: [Number, Number],
    street: String,
    zipcode: String,
  },
  borough: String,
  cuisine: String,
  grades: [GradesSchema],
  name: String,
  restaurant_id: String,
});

const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);

export default RestaurantModel;
