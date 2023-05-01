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
    coordinates: {
      lat: Number,
      long: Number,
    },
    street: String,
    zipcode: String,
  },
  borough: String,
  cousine: String,
  grades: [GradesSchema],
  name: String,
  restaurant_id: String,
});

const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);

export default RestaurantModel;
