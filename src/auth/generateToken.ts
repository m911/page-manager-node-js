import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import ILoginCredentials from "../models/ILoginCredentials";
import { Response } from "express";

dotenv.config();

const generateToken = (userCredentials: ILoginCredentials) => {
	const token = jwt.sign(
		{ data: userCredentials.username },
		process.env.TOKEN_SECRET!,
		{
			expiresIn: process.env.EXPIRESIN,
		}
	);
	const response = {
		access_token: token,
		expires_in: process.env.EXPIRESIN,
		token_type: "Bearer",
	};
	return response;
};

export default generateToken;
