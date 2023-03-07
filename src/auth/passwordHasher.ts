import bcrypt from "bcrypt";
import ILoginCredentials from "../models/ILoginCredentials";
import { Response } from "express";
import dbContext from "../db/dbContext";

export const passwordHasher = async (req: ILoginCredentials, res: Response) => {
	try {
		const hashedPassword = bcrypt.hashSync(req.password, 10);
		const userEntity: ILoginCredentials = {
			username: req.username,
			password: hashedPassword,
		};
		await dbContext.insertUser(userEntity);
		return hashedPassword;
	} catch (error: any) {
		console.log("passwordHasher ", error.message);
	}
};
