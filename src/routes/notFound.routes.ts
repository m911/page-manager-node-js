import { Request, Response, NextFunction, Router } from "express";
import { renderNotFound } from "../utils/renderer";
const notFoundRouter = Router();

notFoundRouter.get("/", (req: Request, res: Response) => {
	renderNotFound(res);
});

export default notFoundRouter;
