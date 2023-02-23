import { Router, Request, Response } from "express";
import { mockDb, userLoginCredentials } from "../db/mockDb";
import { passHasher } from "../auth/passHasher";
import ILoginCredentials from "../models/loginCredentials";

// import { appender } from "../views/homePage";
import appender from "../utils/appender";

const loginRouter = Router();

loginRouter.get("/", (req: Request, res: Response) => {
	// res.send(mockDb[1].pageContent);
	// appender(mockDb[1].pageContent, res);
	appender("src\\pages\\loginPage.html", req, res);

	// src\pages\loginPage.html
});

loginRouter.post("/form", (req: Request, res: Response) => {
	const reqBody: ILoginCredentials = req.body;
	if (reqBody == null && !reqBody) {
		res.send(401);
	} else {
		const accessToken = passHasher(reqBody);
		res.status(200).send(accessToken);
	}
});

export default loginRouter;
