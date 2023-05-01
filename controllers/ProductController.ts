import { Request, Response } from "express";
import { ProductModel } from "../models/Product";

class ProductController {
  constructor() {}

  async allProducts(req: Request, res: Response) {
    try {
      const products = await ProductModel.find();

      return res.status(200).send({ data: products });
    } catch (error) {
      console.error(`Error fetching all products, ${error}`);
      return res.status(500).send({ message: `Error fetching all products, ${error}` });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { sku, name, price, image, stock } = req.body || {};

      if (!sku || !name || !price || !image || !stock) {
        return res.status(400).send({ message: "Body is missing" });
      }

      const product = await ProductModel.create({ sku, name, price, image, stock });

      return res.status(200).send({ data: product });
    } catch (error) {
      console.error(`Error creating product, ${error}`);
      return res.status(500).send({ message: `Error creating product, ${error}` });
    }
  }
}

export default new ProductController();
