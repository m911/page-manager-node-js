import ILoginCredentials from "../models/ILoginCredentials";
import { userLoginCredentials } from "../db/db";
import { Request, Response, NextFunction } from "express";
import dbContext from "../db/dbContext";
import { renderNotauthorized } from "../utils/renderer";

export const checkValidLogin = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { getAll, tables } = dbContext;
	const reqBody: ILoginCredentials = req.body;
	if (reqBody.password == null || reqBody.username == null) {
		return res.sendStatus(403);
	}
	const users = await dbContext.getAll(tables.users);

	const userIndex = users.findIndex(
		(user: ILoginCredentials) =>
			user.username === reqBody.username && user.password === reqBody.password
	);
	console.log(userIndex);
	if (userIndex == -1) {
		return renderNotauthorized(res);
	}
	next();
};
