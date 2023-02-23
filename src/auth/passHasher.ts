import bcrypt from "bcrypt";
import { NextFunction, response } from "express";
import ILoginCredentials from "../models/loginCredentials";
import { authenticatedUsers, userLoginCredentials } from "../db/mockDb";
import { Request, Response } from "express";
import tokenGenerate from "./tokenGenerate";

export const passHasher = (req: ILoginCredentials) => {
	let reqPassword: string = req.password;
	const hashedPassword = bcrypt.hashSync(req.password, 10);
	reqPassword = hashedPassword;
	if (
		authenticatedUsers.findIndex((item) => item.password == reqPassword) == -1
	) {
		authenticatedUsers.push(req);
	}
	const accessToken = tokenGenerate(req);
	return { accessToken };
};
