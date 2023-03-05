import { Router } from "express";
import loginRouter from "./login.routes";
import cPanelRouter from "./cPanel.routes";
import pageRouter from "./page.routes";
import apiPagesRouter from "./apiPages.routes";
import loginSuccessRouter from "./loginSuccess.routes";
import homeRouter from "./home.routes";
import notFoundRouter from "./notFound.routes";

const routes = Router();

//TODO: [PM-2] redirect to 404 if not found
// routes.get("*", homeRouter);
routes.use("/login", loginRouter);
routes.use("/cPanel", cPanelRouter);
routes.use("/pages", pageRouter);
routes.use("/api/pages", apiPagesRouter);
routes.use("/loginSuccess", loginSuccessRouter);
routes.use("/", homeRouter);
routes.use("/404", notFoundRouter);
routes.use("/401", notFoundRouter);

export default routes;
