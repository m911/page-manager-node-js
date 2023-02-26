import ILoginCredentials from "../models/ILoginCredentials";
import { userLoginCredentials } from "../db/db";
import { Response, NextFunction } from "express";

export const checkValidLogin = (
	req: ILoginCredentials,
	res: Response,
	next: NextFunction
) => {
	try {
		if (req.password == null || req.username == null) {
			return res.sendStatus(403);
		}
		const userIndex: number = userLoginCredentials.findIndex(
			(user) => user.username === req.username && user.password === req.password
		);
		if (userIndex === -1) {
			return res
				.status(403)
				.json({ message: "Please provide correct login credentials" });
		}
		next();
	} catch (error: any) {
		console.log(error.message);
		throw new Error("Fail to find user");
	}
};
