import { Router, Request, Response, NextFunction } from "express";
import authenticateToken from "../middleware/authenticateToken";
import dbContext from "../db/dbContext";
import { renderEjsFileNames } from "../utils/renderer";
import IPage from "../models/IPage";
import { json } from "stream/consumers";

const cPanelRouter = Router();

cPanelRouter.get("/", authenticateToken, (req: Request, res: Response) => {
	renderEjsFileNames(["cPanel.ejs"], res);
});

cPanelRouter.get("/new", authenticateToken, (req: Request, res: Response) => {
	renderEjsFileNames(["newPage.ejs"], res, { title: "Create New Page" });
});

cPanelRouter.post("/new", authenticateToken, (req: Request, res: Response) => {
	console.log(req.body);
	const page: IPage = req.body;
	dbContext.insertPage(page);
	// res.redirect("/cPanel");
	res.send(page);
});

cPanelRouter.delete(
	"/:pageId",
	authenticateToken,
	async (req: Request, res: Response) => {
		const id = parseInt(req.params.pageId)!;
		const countDeleted = await dbContext.deletePage(id);
		res.json({ pagesDeleted: countDeleted });
	}
);

export default cPanelRouter;
