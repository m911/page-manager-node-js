import { Router, Request, Response, NextFunction } from "express";
const loginSuccessRoute = Router();
import renderer from "../utils/renderer";
import { pagesDb } from "../db/db";

loginSuccessRoute.get(
	"/",
	(req: Request, res: Response, next: NextFunction) => {
		const { pageContent } = pagesDb[3];
		renderer(res, {
			writeToFile: true,
			pageContent: pageContent,
		});
	}
);
export default loginSuccessRoute;
