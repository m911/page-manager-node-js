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
		const reqBody = req.body;
		if (reqBody == null && !reqBody && reqBody) {
			return res.send(401);
		}
		passwordHasher(reqBody, res);
		const token = generateToken(reqBody);
		res.cookie("access_token", token.access_token);
		res.send({
			statusCode: 200,
			message: "Successfully logged in",
		});
	}
);

export default loginRouter;
