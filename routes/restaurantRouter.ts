import Router, { Express } from "express";
import routerController from "../controllers/RestaurantController";

const router: Express = Router();

router.get("/", routerController.allRestaurants);
router.get("/:id", routerController.getById);
router.post("/", routerController.create);
router.delete("/:id", routerController.delete);

export default router;