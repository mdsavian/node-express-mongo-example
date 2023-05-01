import Router, { Express } from "express";
import ProductController from "../controllers/ProductController";

const productRouter: Express = Router();

productRouter.get("/", ProductController.allProducts);
productRouter.post("/", ProductController.create);

export default productRouter;
