import { Router, Request, Response, response, NextFunction } from "express";
import { readSync } from "fs";
const homeRouter = Router();
readSync;
import { pagesDb } from "../db/db";

homeRouter.get("/", (req: Request, res: Response) => {
	res.render("index.ejs", {
		title: "Home page",
		metaDescription: "Some meta description to my page",
	});
});

// homeRouter.get("*", (req: Request, res: Response) => {
// 	const url = req.url.slice(1);

// 	console.log(req.url);
// 	console.log(url);
// 	res.render("index.ejs", {
// 		title: "Home page",
// 		metaDescription: "Some meta description to my page",
// 	});
// });

export default homeRouter;
// module.exports = homeRouter;
