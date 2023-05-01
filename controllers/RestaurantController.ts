import { Request, Response } from "express";
import RestaurantModel from "../models/Restaurant";

class RestaurantController {
  constructor() {}

  async create(req: Request, res: Response) {
    try {
      const newRestaurant = await RestaurantModel.create(req.body);

      return res.status(200).send({ data: newRestaurant });
    } catch (error) {
      return res.status(500).send({ message: `Error creating restaurant`, error });
    }
  }

  async allRestaurants(req: Request, res: Response) {
    try {
      const restaurants = await RestaurantModel.find({});

      return res.status(200).send({ data: restaurants });
    } catch (error) {
      return res.status(500).send({ message: `Error fetching all restaurants`, error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        throw new Error("Id is missing");
      }

      const deleted = await RestaurantModel.deleteOne({ restaurant_id: id });

      if (deleted.deletedCount > 0) {
        return res.status(200).send({ message: `Restaurant id: ${id} delete successfully` });
      } else {
        throw new Error("");
      }
    } catch (error) {
      return res.status(500).send({ message: `Error deleting restaurant`, error });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        throw new Error("Id is missing");
      }

      const restaurant = await RestaurantModel.findOne({ restaurant_id: id });

      return res.status(200).send({ data: restaurant });
    } catch (error) {
      return res.status(500).send({ message: `Error fetching restaurant`, error });
    }
  }
}

export default new RestaurantController();
