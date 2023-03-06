import { Router, Request, Response, NextFunction } from "express";
import generateToken from "../auth/generateToken";
import { passwordHasher } from "../auth/passwordHasher";
import { checkValidLogin } from "../middleware/checkValidLogin";
import ILoginCredentials from "../models/ILoginCredentials";

const loginRouter = Router();
import { renderEjsFileNames } from "../utils/renderer";

loginRouter.get("/", (req: Request, res: Response) => {
	const ejses = ["login.ejs"];
	renderEjsFileNames(ejses, res);
});

loginRouter.post(
	"/",
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
			res.setHeader(
				"Authorzation",
				response.authorizationType + response.auth_token
			);
			// res.cookie("access_token", token, {
			// 	expires: new Date(Date.now() + 1200),
			// });
			res.redirect("/cPanel");
		}
	}
);

export default loginRouter;
