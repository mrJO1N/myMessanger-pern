import { Router } from "express";
import UserController from "../controllers/user.controller";
import UserValidator from "../middlewares/validators/users.validator";

const router = Router();
const controller = new UserController(),
  validator = new UserValidator();

router.get("/", validator.getOne, controller.getOne);
router.get("/range", validator.getMany, controller.getMany);
router.post("/", validator.post, controller.post);
router.patch("/", validator.patch, controller.patch);
router.delete("/", validator.delete, controller.delete);

export default router;
