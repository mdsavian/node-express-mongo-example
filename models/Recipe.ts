import { Schema, model } from "mongoose";

const RecipeSchema = new Schema({
  name: String,
  steps: [String],
  timers: [Number],
});

const RecipeModel = model("Recipe", RecipeSchema);

export default RecipeModel;
