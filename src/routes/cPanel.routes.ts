import { Router, Request, Response, NextFunction } from "express";
import { passwordHasher } from "../auth/passwordHasher";
import authenticateToken from "../middleware/authenticateToken";
import ILoginCredentials from "../models/ILoginCredentials";
import generateToken from "../auth/generateToken";
import { body, validationResult } from "express-validator";
const cPanelRouter = Router();
import { checkValidLogin } from "../middleware/checkValidLogin";

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
		// console.log(first)
		// cPanelRouter.move("/panel", cPanelRouter);
		res.json({ text: "this is protected text" });
	}
);

cPanelRouter.get("/login", (req: Request, res: Response) => {
	res.redirect("/404");
});

cPanelRouter.get("/oauth", (req: Request, res: Response) => {
	// res.header("Content-Type", "application/json");
	// res.header("authorization", "Bearer " + req.query.access_token);
	res.redirect(302, `/cPanel`);
});

export default cPanelRouter;
