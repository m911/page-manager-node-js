import bcrypt from "bcrypt";
import { NextFunction, response } from "express";
import ILoginCredentials from "../models/ILoginCredentials";
import { authenticatedUsers, userLoginCredentials } from "../db/db";
import { Request, Response } from "express";
import generateToken from "./generateToken";

export const passwordHasher = (req: ILoginCredentials, res: Response) => {
	if (req.password == null || req.username == null) {
		return res.sendStatus(403);
	}
	const userIndex: number = userLoginCredentials.findIndex(
		(user) => user.username === req.username && user.password === req.password
	);
	if (userIndex === -1) {
		return res.status(403).send("Please provide correct login credentials");
	}
	const hashedPassword = bcrypt.hashSync(req.password, 10);
	const dbUser: ILoginCredentials = {
		username: req.username,
		password: hashedPassword,
	};
	const authUserIndex: number = authenticatedUsers.findIndex(
		(item) => item.username == req.username
	);
	if (authUserIndex == -1) {
		authenticatedUsers.push(req);
	} else {
		authenticatedUsers[authUserIndex] = dbUser;
	}

	return hashedPassword;
};
