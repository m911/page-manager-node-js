import { Request, Response, NextFunction, Router } from "express";
import { pagesDb } from "../db/db";
import renderer from "../utils/renderer";
const notFoundRouter = Router();

notFoundRouter.get("/", (req: Request, res: Response) => {
	renderer(res, { resCode: 404 });
});

export default notFoundRouter;
