import { Router, Request, Response, response, NextFunction } from "express";
import { readSync } from "fs";
const homeRouter = Router();
import { pagesDb } from "../db/db";

homeRouter.get("/", (req: Request, res: Response) => {
	res.render("index.ejs", {
		title: "Home page",
		metaDescription: "Some meta ",
		pageContent: `<h1>Welcome to the page.
	                <br>
	                <h3>

	                    If you are admin, please use the button on the navbar to get started.
	                </h3>
	            </h1>`,
	});
	// res.send("Home page");
});

export default homeRouter;
// module.exports = homeRouter;
