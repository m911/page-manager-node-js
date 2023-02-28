import { Router } from "express";
import loginRouter from "./login.routes";
import homeRouter from "./home.routes";
import cPanelRouter from "./cPanel.routes";
import loginSuccessRouter from "./loginSuccess.routes";
import notFoundRouter from "./notFoundRouter";

const routes = Router();

routes.use("/", homeRouter);
routes.get("*", homeRouter);
routes.use("/login", loginRouter);
routes.use("/cPanel", cPanelRouter);
routes.use("/loginSuccess", loginSuccessRouter);
// routes.use("/404", notFoundRouter);

export default routes;
