import { Router, Request, Response, response, NextFunction } from "express";
import { getPage } from "../db/query";
import { pages } from "../db/mockDb";
const homeRouter = Router();
import { writeFileSync, readFile, appendFile, appendFileSync } from "fs";
import viewWriter from "../utils/writeToView";

homeRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
	// const page = await getPage("home", req);
	// console.log(page);
	// console.log(mockPage);
	// writeFileSync("./views/homePage.html", mockPage.content);
	viewWriter(res, "someContent");
	// res.render(
	// 	"home.ejs",
	// 	// "homePage.html",

	// 	{ pageContent: "some text" }
	// 	// (err, html) => {
	// 	// 	{
	// 	// 		console.log(err);
	// 	// 		throw new Error(err.message);
	// 	// 	}
	// 	// 	// html = mockPage.content;
	// 	// }
	// );
	// res.sendFile(`/views/homePage.html`);
	// res.send(mockPage.content);
	// res.status(200).json(mockPage.content);
});

homeRouter.post("/", (req: Request, res: Response) => {
	res.send({
		data: req.body,
	});
});
export default homeRouter;
