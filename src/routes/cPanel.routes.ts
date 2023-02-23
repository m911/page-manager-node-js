import { Router, Request, Response } from "express";
import { mockDb, userLoginCredentials } from "../db/mockDb";
import { passHasher } from "../auth/passHasher";
import bcrypt from "bcrypt";
import renderer from "../utils/appender";

const cPanelRouter = Router();

cPanelRouter.get("/", (req: Request, res: Response) => {
	const accessToken = req.headers.authorization;
	if (accessToken == null) {
		res.status(401).send(`You don't have access to this content. Please login`);
		// .redirect("/login");
		return;
	}
	// appender();
	res.status(200).send("Access granted");
});

export default cPanelRouter;
