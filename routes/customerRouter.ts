import Router, { Express } from "express";
import CustomerController from "../controllers/CustomerController";

const customerRouter: Express = Router();

customerRouter.get("/", CustomerController.allCustomers);
customerRouter.post("/", CustomerController.create);

export default customerRouter;
