import bcrypt from "bcrypt";
import ILoginCredentials from "../models/ILoginCredentials";
import { authenticatedUsers } from "../db/db";
import { Response } from "express";

export const passwordHasher = (req: ILoginCredentials, res: Response) => {
	try {
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
	} catch (error: any) {
		console.log(error.message);
	}
};
