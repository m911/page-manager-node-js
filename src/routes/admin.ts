import { Router } from "express";
import userRouter from "./user.routes";

const routes = Router();

routes.use("/admin", userRouter);

export default routes;
