import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { renderNotauthorized } from "../utils/renderer";

export default function authenticateToken(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const cookieToken = req.signedCookies;

	console.log("access_token cookie is " + cookieToken);

	if (cookieToken == null) {
		return renderNotauthorized(res);
	}
	jwt.verify(cookieToken, process.env.TOKEN_SECRET!, (err: any, data: any) => {
		if (err) {
			return renderNotauthorized(res);
		} else {
			// req.token = token;
			// res.json(data);
			next();
		}
	});
}
