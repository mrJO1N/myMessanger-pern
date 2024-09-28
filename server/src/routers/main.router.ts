import { Router } from "express";
import usersRouter from "./users.router";

const router = Router();
const apiRoute = "/api";

router.use(`/${apiRoute}/users`, usersRouter);

export default router;
