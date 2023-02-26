import { Request, Response, NextFunction, Router } from "express";
import { pagesDb } from "../db/db";
import renderer from "../utils/renderer";
const notFoundRouter = Router();

notFoundRouter.get("/", (req: Request, res: Response) => {
	renderer(res, { url: "404" });
});

notFoundRouter.get("/test2", (req: Request, res: Response) => {
	const base = pagesDb[0].parts;
	const page = pagesDb[4];
	res.send(base?.first + page.pageContent + base?.second);
});

export default notFoundRouter;
