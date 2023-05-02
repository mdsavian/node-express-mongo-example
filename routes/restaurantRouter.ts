import Router, { Express } from "express";
import routerController from "../controllers/RestaurantController";

const router: Express = Router();

router.post("/", routerController.create);
router.post("/createBatch", routerController.createBatch);

router.delete("/:id", routerController.delete);

router.get("/findScore", routerController.findScore);
router.get("/findScoreAndNotCousineAndCoord", routerController.findScoreAndNotCousineAndCoord);
router.get(
  "/findNotCousineGradePointNotBoroughOrderDescCousine",
  routerController.findNotCousineGradePointNotBoroughOrderDescCousine
);
router.get("/findByCoord", routerController.findByCoord);
router.get("/byRestaurantId/:id", routerController.getByRestaurantId);

router.get("/", routerController.allRestaurants);
router.get("/:id", routerController.getById);
export default router;
