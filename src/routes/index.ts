import { Router } from "express";
import loginRouter from "./login.routes";
import homeRouter from "./home.routes";
import cPanelRouter from "./cPanel.routes";

const routes = Router();

routes.use("/", homeRouter);
routes.use("/login", loginRouter);
routes.use("/cPanel", cPanelRouter);

export default routes;
