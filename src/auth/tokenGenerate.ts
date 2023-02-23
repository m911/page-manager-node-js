import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import ILoginCredentials from "../models/loginCredentials";

dotenv.config();

const tokenGenerate = (user: ILoginCredentials) => {
	const tokenSecret: string =
		"ksjfhsdfbdsfkjsdfbhsdlkhfkugh%^%$hgasdklfdkslfsdkjfgjh23t762423ug432jg423j";
	return jwt.sign({ data: user }, tokenSecret, {
		expiresIn: process.env.EXPIRESIN,
	});
};

export default tokenGenerate;
