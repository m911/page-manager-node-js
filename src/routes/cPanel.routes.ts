import { Router, Request, Response, NextFunction } from "express";
import { passwordHasher } from "../auth/passwordHasher";
import authenticateToken from "../middleware/authenticateToken";
import ILoginCredentials from "../models/ILoginCredentials";
import generateToken from "../auth/generateToken";
import { checkValidLogin } from "../middleware/checkValidLogin";
import dbContext from "../db/dbContext";
import { renderNotFound, renderEjsFileNames } from "../utils/renderer";
import IPage from "../models/IPage";

const cPanelRouter = Router();

cPanelRouter.get("/", authenticateToken, (req: Request, res: Response) => {
	res.render("cPanel.ejs");
});

cPanelRouter.get(
	"/new",
	// authenticateToken,
	(req: Request, res: Response) => {
		renderEjsFileNames(["newPage.ejs"], res, { title: "Create New Page" });
	}
);

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
