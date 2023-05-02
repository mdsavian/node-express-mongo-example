import RestaurantModel from "../models/Restaurant";

class RestaurantService {
  constructor() {}

  async create(newRestaurantData: any) {
    return await RestaurantModel.create(newRestaurantData);
  }
}

export default new RestaurantService();
