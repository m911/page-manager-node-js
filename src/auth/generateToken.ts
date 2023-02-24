import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import ILoginCredentials from "../models/ILoginCredentials";

dotenv.config();

const generateToken = (user: ILoginCredentials) => {
	const token = jwt.sign({ data: user.username }, process.env.TOKEN_SECRET!, {
		expiresIn: process.env.EXPIRESIN,
	});
	const response = {
		access_token: token,
		expires_in: process.env.EXPIRESIN,
		token_type: "Bearer",
	};
	return token;
	// return response;
};

export default generateToken;
