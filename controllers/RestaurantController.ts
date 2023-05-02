import { Request, Response } from "express";
import RestaurantModel from "../models/Restaurant";

// https://www.w3resource.com/mongodb-exercises/#PracticeOnline

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

  async createBatch(req: Request, res: Response) {
    try {
      const batch = req.body;

      const promises = batch.map((restaurant: any) => {
        return RestaurantModel.create(restaurant);
      });

      await Promise.all(promises);

      return res.status(200).send({ message: "Success" });
    } catch (error) {
      return res.status(500).send({ message: `Error creating in batch, ${error}` });
    }
  }

  async allRestaurants(req: Request, res: Response) {
    try {
      const { withSomeFields, withoutId, borough, limit, skip } = req.query;

      let restaurants;

      let options = {};

      if (limit) {
        options = { ...options, limit: parseInt(limit.toString()) };
      }

      if (skip) {
        options = { ...options, skip: parseInt(skip.toString()) };
      }

      if (borough) {
        restaurants = await RestaurantModel.find(
          { borough },
          { _id: 0, restaurant_id: 1, name: 1, borough: 1, cousine: 1 },
          options
        );
      } else if (withSomeFields) {
        restaurants = await RestaurantModel.find(
          {},
          { restaurant_id: 1, name: 1, borough: 1, cousine: 1 }
        );
      } else if (withoutId) {
        restaurants = await RestaurantModel.find(
          {},
          { _id: 0, restaurant_id: 1, name: 1, borough: 1, cousine: 1 }
        );
      } else {
        restaurants = await RestaurantModel.find({});
      }

      return res.status(200).send({ data: restaurants });
    } catch (error) {
      return res.status(500).send({ message: `Error fetching all restaurants, ${error}` });
    }
  }

  async findScore(req: Request, res: Response) {
    try {
      const { higherThan, lessThan } = req.query;

      const restaurants = await RestaurantModel.find({
        grades: { $elemMatch: { score: { $gt: higherThan, $lt: lessThan } } },
      });

      return res.status(200).send({ data: restaurants });
    } catch (error) {
      return res.status(500).send({ message: `Error fetching score restaurants, ${error}` });
    }
  }

  async findByCoord(req: Request, res: Response) {
    try {
      const { lat } = req.query;

      const restaurants = await RestaurantModel.find({ "address.coord": { $lt: lat } });

      return res.status(200).send({ data: restaurants });
    } catch (error) {
      return res.status(500).send({ message: `Error fetching by coord, ${error}` });
    }
  }

  async findScoreAndNotCousineAndCoord(req: Request, res: Response) {
    try {
      const { cousine, score, lat } = req.query;

      const restaurants = await RestaurantModel.find({
        cousine: { $ne: cousine },
        grades: { $elemMatch: { score: { $gt: score } } },
        "address.coord": { $lt: lat },
      });

      return res.status(200).send({ data: restaurants });
    } catch (error) {
      return res.status(500).send({ message: `Error fetching cousine restaurants, ${error}` });
    }
  }

  async findNotCousineGradePointNotBoroughOrderDescCousine(req: Request, res: Response) {
    try {
      const { cousine, gradePoint, borough } = req.query;

      const restaurants = await RestaurantModel.find({
        cousine: { $ne: cousine },
        "grades.grade": gradePoint,
        borough: { $ne: borough },
      }).sort({ cuisine: -1 });

      return res.status(200).send({ data: restaurants });
    } catch (error) {
      return res.status(500).send({ message: `Error fetching cousine restaurants, ${error}` });
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

      const restaurant = await RestaurantModel.findOne({ _id: id });

      return res.status(200).send({ data: restaurant });
    } catch (error) {
      return res.status(500).send({ message: `Error fetching restaurant`, error });
    }
  }

  async getByRestaurantId(req: Request, res: Response) {
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
