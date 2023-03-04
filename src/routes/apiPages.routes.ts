import { Router, Request, Response, NextFunction } from "express";
import { passwordHasher } from "../auth/passwordHasher";
import authenticateToken from "../middleware/authenticateToken";
import ILoginCredentials from "../models/ILoginCredentials";
import generateToken from "../auth/generateToken";
import { checkValidLogin } from "../middleware/checkValidLogin";
import dbContext from "../db/query2";

const apiPagesRouter = Router();

apiPagesRouter.get("/", async (req: Request, res: Response) => {
	// cPanelRouter.move("/panel", cPanelRouter);
	// return res.redirect("cPanel/pages");
	const pages = await dbContext.getPages();
	res.json(pages);
});

export default apiPagesRouter;