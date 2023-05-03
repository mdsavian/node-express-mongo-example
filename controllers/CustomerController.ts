import { Request, Response } from "express";
import customerService from "../services/customerService";

class CustomerController {
  constructor() {}

  async allCustomers(req: Request, res: Response) {
    try {
      const customers = await customerService.allCustomers();
      return res.status(200).send({ data: customers });
    } catch (error) {
      return res.status(500).send({ message: `Error fetching all customers, ${error}` });
    }
  }

  create(req: Request, res: Response) {
    return res.status(200).send({ data: [] });
  }
}

export default new CustomerController();
