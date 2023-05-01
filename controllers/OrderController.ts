import { Request, Response } from "express";
import { OrderModel } from "../models/Order";
import { ProductModel } from "../models/Product";

class OrdersController {
  constructor() {}

  async allOrders(req: Request, res: Response) {
    try {
      const orders = await OrderModel.find();

      return res.status(200).send({ data: orders });
    } catch (error) {
      console.error("error fetching all orders");

      return res.status(500).send({ message: "error fetching all orders" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { number, total, productIds } = req.body || {};

      if (!number || !total || !productIds.length) {
        return res.status(400).send({ message: "Missing body" });
      }

      const products = await ProductModel.find({ _id: { $in: productIds } });
      console.log(products);

      const newOrder = {
        number,
        total,
        products,
      };

      const orderCreated = await OrderModel.create(newOrder);
      return res.status(200).send({ data: orderCreated });
    } catch (error) {
      console.error("error creating order");
      return res.status(500).send({ message: "error creating order" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params || {};

      if (!id) {
        return res.status(400).send({ message: "Missing order id" });
      }

      const order = await OrderModel.findOne({ _id: id });

      if (!order) {
        throw Error("Order not found");
      }

      const deleted = await OrderModel.deleteOne({ _id: id });

      if (deleted.deletedCount > 0) {
        return res.status(200).send({ messsage: `Order with id: ${id} deleted successfully` });
      } else {
        throw Error;
      }
    } catch (error) {
      console.error(`Error deleting order. ${error}`);
      return res.status(500).send({ message: `Error deleting order. ${error}` });
    }
  }
}

export default new OrdersController();
