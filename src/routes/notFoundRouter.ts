import ILoginCredentials from "../models/ILoginCredentials";
import { userLoginCredentials } from "../db/db";
import { Request, Response, NextFunction, Router } from "express";
import authenticateToken from "../middleware/authenticateToken";
import { pagesDb } from "../db/db";
import renderer from "../utils/renderer";
const notFoundRouter = Router();

notFoundRouter.get("/", (req: Request, res: Response) => {
	const page = pagesDb[4];
	renderer(res, {
		writeToFile: true,
		pageContent: page.pageContent,
	});
});

export default notFoundRouter;
