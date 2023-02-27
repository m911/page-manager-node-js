import { Router, Request, Response, response, NextFunction } from "express";
import { readSync } from "fs";
import { pagesDb } from "../db/db";
const homeRouter = Router();
import ejs from "ejs";
readSync;
import renderer from "../utils/renderer";

homeRouter.get("/", (req: Request, res: Response) => {
	const { title, metaDescription, pageContent, url, style } = pagesDb[0];

	// res.render("home.ejs", {
	res.render("login.ejs", {
		async: true,
		title,
		metaDescription,
	});
	// res.send("Welcom");
});
export default homeRouter;
module.exports = homeRouter;
