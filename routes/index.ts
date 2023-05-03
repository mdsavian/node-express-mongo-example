import Router, { Express } from "express";
import orderRouter from "./orderRouter";
import productRouter from "./productRouter";
import recipeRouter from "./recipeRouter";
import restaurantRouter from "./restaurantRouter";
import customerRouter from "./customerRouter";

const router: Express = Router();

router.use("/orders", orderRouter);
router.use("/products", productRouter);
router.use("/recipes", recipeRouter);
router.use("/restaurants", restaurantRouter);
router.use("/customers", customerRouter);
export default router;
