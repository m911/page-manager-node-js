import { Router, Request, Response } from "express";
import { pagesDb } from "../db/db";
import { passwordHasher } from "../auth/passHasher";
import authenticateToken from "../auth/authenticateToken";
import ILoginCredentials from "../models/ILoginCredentials";
import generateToken from "../auth/generateToken";
import { readFileSync } from "fs";
import { CONFIG } from "../config/CONFIG";
import renderer from "../utils/renderer";
import { body, validationResult } from "express-validator";
const cPanelRouter = Router();

cPanelRouter.get("/", authenticateToken, (req: Request, res: Response) => {
	res.status(200).write("Access granted");
	res.end();
});

cPanelRouter.get("/login", (req: Request, res: Response) => {
	res.sendStatus(404);
});

cPanelRouter.post("/login", (req: Request, res: Response) => {
	const reqBody: ILoginCredentials = req.body;
	if (reqBody == null && !reqBody) {
		res.send(401);
	} else {
		passwordHasher(reqBody, res);
		const accessToken = generateToken(reqBody);
		const request = new Request(CONFIG.BASE_URL + "/cPanel", {
			method: "GET",
			headers: {
				"Content-Type": "application/JSON",
				authorization: "Bearer " + accessToken,
			},
		});
		request.arrayBuffer();
		// res.redirect(request);
		// res.redirect("/cPanel",);
	}
});
export default cPanelRouter;
