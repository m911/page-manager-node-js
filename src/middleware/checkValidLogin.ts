import ILoginCredentials from "../models/ILoginCredentials";
import { userLoginCredentials } from "../db/db";
import { Request, Response, NextFunction } from "express";

export const checkValidLogin = (
	// req: ILoginCredentials,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const reqBody: ILoginCredentials = req.body;

	if (reqBody.password == null || reqBody.username == null) {
		return res.sendStatus(403);
	}
	const userIndex: number = userLoginCredentials.findIndex(
		(user) =>
			user.username === reqBody.username && user.password === reqBody.password
	);
	if (userIndex === -1) {
		return res
			.status(403)
			.json({ message: "Please provide correct login credentials" });
	} else {
		next();
	}
};
