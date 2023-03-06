import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import ILoginCredentials from "../models/ILoginCredentials";

dotenv.config();

const generateToken = (userCredentials: ILoginCredentials, res?: Response) => {
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
	// return token;
	res?.json().;
};

export default generateToken;
