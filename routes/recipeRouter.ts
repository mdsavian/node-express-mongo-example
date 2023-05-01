import Router, { Express } from "express";
import RecipeController from "../controllers/RecipeController";

const recipeRouter: Express = Router();

recipeRouter.post("/", RecipeController.create);
recipeRouter.get("/step/:id", RecipeController.findByTime);

export default recipeRouter;
