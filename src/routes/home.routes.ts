import { Router, Request, Response, response, NextFunction } from "express";
import { readSync } from "fs";
const homeRouter = Router();
readSync;

homeRouter.get("/", (req: Request, res: Response) => {
	res.render("index.ejs", {
		title: "Home page",
		metaDescription: "Some meta description to my page",
	});
});
export default homeRouter;
module.exports = homeRouter;
