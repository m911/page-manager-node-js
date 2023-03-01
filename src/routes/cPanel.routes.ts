import { Router, Request, Response, NextFunction } from "express";
import { passwordHasher } from "../auth/passwordHasher";
import authenticateToken from "../middleware/authenticateToken";
import ILoginCredentials from "../models/ILoginCredentials";
import generateToken from "../auth/generateToken";
import { body, validationResult } from "express-validator";
import { checkValidLogin } from "../middleware/checkValidLogin";
import fetch from "../db/query";

import IPage from "../models/IPage";

const cPanelRouter = Router();

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

cPanelRouter.get(
	"/",
	// authenticateToken,
	(req: Request, res: Response) => {
		fetch.getAll(res, (rows) => {
			// return res.send({ data: rows });
			console.table(rows);
			res.render("cPanel", { pages: rows });
		});
		// console.log(rows);
		// return cPanelRouter.move("/panel", cPanelRouter);
	}
);

cPanelRouter.get("/login", (req: Request, res: Response) => {
	return res.redirect("/404");
});

export default cPanelRouter;
