import CustomerModel from "../models/Customer";

class CustomerService {
  constructor() {}

  async allCustomers() {
    return await CustomerModel.find({});
  }
}

export default new CustomerService();
