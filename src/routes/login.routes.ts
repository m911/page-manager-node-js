import { Router, Request, Response } from "express";

const loginRouter = Router();
import { renderEjsFileNames } from "../utils/renderer";

loginRouter.get("/", (req: Request, res: Response) => {
	const ejses = ["login.ejs"];
	renderEjsFileNames(ejses, res);
});

export default loginRouter;
