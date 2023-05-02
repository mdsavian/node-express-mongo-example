import Router, { Express } from "express";
import routerController from "../controllers/RestaurantController";

const router: Express = Router();

router.post("/", routerController.create);
router.post("/createBatch", routerController.createBatch);

router.delete("/:id", routerController.delete);

router.get("/findScore", routerController.findScore);
router.get("/findScoreAndCousine", routerController.findScoreAndCousine);
router.get("/byRestaurantId/:id", routerController.getByRestaurantId);

router.get("/", routerController.allRestaurants);
router.get("/:id", routerController.getById);
export default router;
