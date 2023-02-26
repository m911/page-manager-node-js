import { Router, Request, Response, NextFunction } from "express";
import { pagesDb } from "../db/db";
import { passwordHasher } from "../auth/passwordHasher";
import authenticateToken from "../middleware/authenticateToken";
import ILoginCredentials from "../models/ILoginCredentials";
import generateToken from "../auth/generateToken";
import { body, validationResult } from "express-validator";
import { CONFIG } from "../config/CONFIG";
const cPanelRouter = Router();
import { checkValidLogin } from "../middleware/checkValidLogin";
import { cachedDataVersionTag } from "v8";

cPanelRouter.post(
	"/login",
	async (req: Request, res: Response, next: NextFunction) => {
		const reqBody: ILoginCredentials = req.body;
		console.log(reqBody.username);
		if (reqBody == null && !reqBody && reqBody) {
			res.send(401);
		} else {
			console.log(reqBody);
			checkValidLogin(reqBody, res, next);
			passwordHasher(reqBody, res);
			const token = generateToken(reqBody);
			res.cookie("access_token", token);
			const response = {
				authorizationType: "Bearer ",
				auth_token: token,
			};
			res.send(response);
			// res.setHeader("authorization", token);
			// res.redirect(req.baseUrl);
			// .redirect(req.baseUrl);
			// res.redirect(`/oauth`);
		}
	}
);

cPanelRouter.get("/", authenticateToken, (req: Request, res: Response) => {
	res.json({ text: "this is protected text" });
});

cPanelRouter.get("/login", (req: Request, res: Response) => {
	res.sendStatus(404);
});

cPanelRouter.get("/oauth", (req: Request, res: Response) => {
	// res.header("Content-Type", "application/json");
	// res.header("authorization", "Bearer " + req.query.access_token);
	res.redirect(302, `/cPanel`);
});

export default cPanelRouter;
