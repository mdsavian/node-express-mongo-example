import { Request, Response } from "express";
import RecipeModel from "../models/Recipe";
class RecipeController {
  constructor() {}

  async create(req: Request, res: Response) {
    try {
      const newRecipe = await RecipeModel.create(req.body);

      return res.status(200).send({ data: newRecipe });
    } catch (error) {
      return res.status(500).send({ message: `error creating recipe, ${error}` });
    }
  }

  async findByTime(req: Request, res: Response) {
    const { id: recipeId } = req.params || {};

    if (!recipeId || isNaN(parseInt(recipeId))) {
      return res.status(400).send("NOT_FOUND");
    }

    const { elapsedTime } = req.query || {};

    if (!elapsedTime) {
      return res.status(200).send({ index: 0 });
    }

    const convertedElapsedTime = parseInt(elapsedTime.toString());

    const recipe = await RecipeModel.findOne({ _id: recipeId });

    if (!recipe) {
      return res.status(403).send("NOT_FOUND");
    }

    let currentStep = 0;
    let amountTime = 0;

    console.log(Object.values(recipe.timers));

    for (let i = 0; i < recipe.timers.length; i++) {
      amountTime += recipe.timers[i];

      if (amountTime >= convertedElapsedTime) {
        currentStep = i;
        break;
      }
    }

    console.log({ currentStep });

    return res.status(200).send({ index: currentStep });
  }
}

export default new RecipeController();
