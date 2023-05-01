import Router, { Express } from "express";
import OrdersController from "../controllers/OrderController";
import OrderController from "../controllers/OrderController";

const orderRouter: Express = Router();

orderRouter.get("/", OrdersController.allOrders);
orderRouter.post("/", OrdersController.create);
orderRouter.delete("/:id", OrdersController.delete);
orderRouter.get("/:id", OrderController.getById);

export default orderRouter;
