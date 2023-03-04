import { Request, Response, NextFunction, Router } from "express";
import renderer from "../utils/renderer";
const notFoundRouter = Router();

notFoundRouter.get("/", (req: Request, res: Response) => {
	renderer.renderByCode(404, res);
});

export default notFoundRouter;
