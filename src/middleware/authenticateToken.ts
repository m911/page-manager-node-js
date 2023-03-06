import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { renderNotauthorized } from "../utils/renderer";

export default function authenticateToken(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const authHeader = req.headers.authorization;
	const queryParam = req.query.access_token?.toString();
	const cookieToken = req.cookies?.get("access_token");
	console.log(cookieToken);
	const token =
		(authHeader && authHeader.split(" ")[1]) || queryParam || cookieToken;
	console.log(cookieToken);
	console.log(token);
	if (token == null) {
		return renderNotauthorized(res);
	}
	jwt.verify(token, process.env.TOKEN_SECRET!, (err: any, data: any) => {
		if (err) {
			return renderNotauthorized(res);
			// return res.sendStatus(401);
		} else {
			// req.token = token;
			// res.json(data);
			next();
		}
	});
}
