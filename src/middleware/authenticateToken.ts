import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { renderNotauthorized } from "../utils/renderer";

export default function authenticateToken(
	req: any,
	res: Response,
	next: NextFunction
) {
	const cookieToken = req.cookies.access_token;

	if (cookieToken == null) {
		return renderNotauthorized(res);
	}
	jwt.verify(cookieToken, process.env.TOKEN_SECRET!, (err: any, data: any) => {
		if (err) {
			return res.redirect("/login");
		}
		next();
	});
}
