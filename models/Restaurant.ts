import mongoose, { Schema } from "mongoose";

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
  grades: [
    {
      date: Date,
      grade: String,
      score: Number,
    },
  ],
  name: String,
  restaurant_id: String,
});

const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);

export default RestaurantModel;
