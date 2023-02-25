import { error } from "console";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default function authenticateToken(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const authHeader = req.headers.authorization;
	const queryParam = req.query.access_token?.toString();
	console.log(queryParam);
	const token = (authHeader && authHeader.split(" ")[1]) || queryParam;
	console.log(authHeader && authHeader.split(" ")[1]);
	console.log(token);
	if (token == null) {
		return res.sendStatus(401);
	}
	jwt.verify(token, process.env.TOKEN_SECRET!, (err) => {
		if (err) {
			return res.sendStatus(403);
		}
		next();
	});
}
