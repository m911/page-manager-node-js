import { Router, Request, Response, response, NextFunction } from "express";
import { readSync } from "fs";
const homeRouter = Router();
import { pagesDb } from "../db/db";
import dbContext from "../db/query2";

homeRouter.get("/", (req: Request, res: Response) => {
	res.render("index.ejs", {
		title: "Home page",
		metaDescription: "Some meta ",
		pageContent: `<h1>Welcome to the paguysdfduy
	                <br>
	                <h3>

	                    If you are admin, please use the button on the navbar to get started.
	                </h3>
	            </h1>`,
	});
	// res.send("Home page");
});
// homeRouter.get("/:url", async (req: Request, res: Response) => {
// 	const url = req.params.url;
// 	const page = await dbContext.getPageByUrl(url);

// 	res.render("index.ejs", {
// 		title: page.title,
// 		metaDescription: page.metaDescription,
// 		pageContent: page.pageContent,
// 	});
// });

export default homeRouter;
// module.exports = homeRouter;
