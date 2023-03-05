import { Router, Request, Response, response, NextFunction } from "express";
const pageRouter = Router();
import { renderByUrl } from "../utils/renderer";

pageRouter.get("/:url", async (req: Request, res: Response) => {
	const url = req.params.url;
	renderByUrl(url, res);
});

export default pageRouter;
