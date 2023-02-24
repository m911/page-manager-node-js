import { Router } from "express";
import loginRouter from "./login.routes";
import homeRouter from "./home.routes";
import cPanelRouter from "./cPanel.routes";
import loginSuccessRouter from "./loginSuccess.routes";

const routes = Router();

routes.use("/", homeRouter);
routes.use("/login", loginRouter);
routes.use("/cPanel", cPanelRouter);
routes.use("/loginSuccess", loginSuccessRouter);

export default routes;
