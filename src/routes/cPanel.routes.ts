import { Router, Request, Response, NextFunction } from "express";
import authenticateToken from "../middleware/authenticateToken";
import dbContext from "../db/dbContext";
import { renderEjsFileNames } from "../utils/renderer";
import IPage from "../models/IPage";

const cPanelRouter = Router();

cPanelRouter.get("/", authenticateToken, (req: Request, res: Response) => {
	renderEjsFileNames(["cPanel.ejs"], res);
});

cPanelRouter.get("/new", authenticateToken, (req: Request, res: Response) => {
	renderEjsFileNames(["newPage.ejs"], res, { title: "Create New Page" });
});

cPanelRouter.post("/new", (req: Request, res: Response) => {
	const page: IPage = req.body;
	dbContext.insertPage(page);
	res.send(req.body);
});

cPanelRouter.delete("/:pageId", async (req: Request, res: Response) => {
	const id = parseInt(req.params.pageId)!;
	const countDeleted = await dbContext.deletePage(id);
	res.json({ pagesDeleted: countDeleted });
});

export default cPanelRouter;
