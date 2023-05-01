import Router, { Express } from "express";
import orderRouter from "./orderRouter";
import productRouter from "./productRouter";
import recipeRouter from "./recipeRouter";
import restaurantRouter from "./restaurantRouter";

const router: Express = Router();

router.use("/orders", orderRouter);
router.use("/products", productRouter);
router.use("/recipes", recipeRouter);
router.use("/restaurants", restaurantRouter);

export default router;
