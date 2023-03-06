import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import ILoginCredentials from "../models/ILoginCredentials";
import ms = require("ms");

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
		expires_in: ms(process.env.EXPIRESIN!),
		cookie_key: "access_token",
	};
	return response;
};

export default generateToken;
