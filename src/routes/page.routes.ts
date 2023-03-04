import { Router, Request, Response, response, NextFunction } from "express";
const pageRouter = Router();
import dbContext from "../db/query2";
import {
	renderByUrl,
	renderNotFound,
	renderServerError,
	renderNotauthorized,
} from "../utils/renderer";

pageRouter.get("/:url", async (req: Request, res: Response) => {
	const url = req.params.url;
	const page = await dbContext.getPageByUrl(url);

	res.render("index.ejs", {
		title: page.title,
		metaDescription: page.metaDescription,
		pageContent: page.pageContent,
	});
});

export default pageRouter;
// module.exports = homeRouter;
