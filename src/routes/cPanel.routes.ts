import { Router, Request, Response, NextFunction } from "express";
import { passwordHasher } from "../auth/passwordHasher";
import authenticateToken from "../middleware/authenticateToken";
import ILoginCredentials from "../models/ILoginCredentials";
import generateToken from "../auth/generateToken";
import { checkValidLogin } from "../middleware/checkValidLogin";
import dbContext from "../db/query2";
import { renderNotFound, renderEjsFileNames } from "../utils/renderer";

const cPanelRouter = Router();

cPanelRouter.get(
	"/",
	// authenticateToken,
	(req: Request, res: Response) => {
		res.render("cPanel.ejs");
	}
);

//TODO: [PM-1] Move to login route
cPanelRouter.post(
	"/login",
	checkValidLogin,
	(req: Request, res: Response, next: NextFunction) => {
		const reqBody: ILoginCredentials = req.body;
		if (reqBody == null && !reqBody && reqBody) {
			res.send(401);
		} else {
			passwordHasher(reqBody, res);
			const token = generateToken(reqBody);
			const response = {
				authorizationType: "Bearer ",
				auth_token: token,
			};
			res.cookie("access_token", token, {
				expires: new Date(Date.now() + 1200),
			});
			res.send(response);
		}
	}
);

cPanelRouter.get("/new", (req: Request, res: Response) => {
	const page = ["newPage.ejs"];
	renderEjsFileNames(page, res);
});

cPanelRouter.delete("/:pageId", async (req: Request, res: Response) => {
	const id = parseInt(req.params.pageId)!;
	const countDeleted = await dbContext.deletePage(id);
	res.json({ pagesDeleted: countDeleted });
});

export default cPanelRouter;
