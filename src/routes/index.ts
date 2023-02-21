import { Router } from "express";
import userRouter from "./user.routes";
import loginRouter from "./login.routes";
import homeRouter from "./home.routes";

const routes = Router();

routes.use("/", homeRouter);
routes.use("/users", userRouter);
routes.use("/login", loginRouter);

export default routes;
