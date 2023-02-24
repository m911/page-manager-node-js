import { Router, Request, Response } from "express";
import { mockDb } from "../db/mockDb";
import { passwordHasher } from "../auth/passHasher";
import authenticateUser from "../auth/authenticateToken";
import ILoginCredentials from "../models/ILoginCredentials";
import generateToken from "../auth/tokenGenerate";
import { readFileSync } from "fs";
import { CONFIG } from "../config/CONFIG";
import renderer from "../utils/renderer";

const cPanelRouter = Router();

cPanelRouter.get("/", authenticateUser, (req: Request, res: Response) => {
	res.status(200).send("Access granted");
});

cPanelRouter.get("/login", (req: Request, res: Response) => {
	const pageContent: string = mockDb[1].pageContent;
	const pageContent2 = readFileSync(
		CONFIG.ROOT_PATH + "/pages/login/index.html"
	);
	
	renderer(res, {
		writeToFile: true,
		pageContent: pageContent,
	});
});

cPanelRouter.post("/login", (req: Request, res: Response) => {
	const reqBody: ILoginCredentials = req.body;
	if (reqBody == null && !reqBody) {
		res.send(401);
	} else {
		passwordHasher(reqBody, res);
		const oauth = generateToken(reqBody);
		res.json({ oauth });
		// .redirect("/cPanel");
	}
});

export default cPanelRouter;
