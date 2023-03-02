import { Router, Request, Response, NextFunction } from "express";
import { passwordHasher } from "../auth/passwordHasher";
import authenticateToken from "../middleware/authenticateToken";
import ILoginCredentials from "../models/ILoginCredentials";
import generateToken from "../auth/generateToken";
import { body, validationResult } from "express-validator";
import { checkValidLogin } from "../middleware/checkValidLogin";
import fetch from "../db/query";
import { pagesDb } from "../db/db";

const cPanelRouter = Router();

cPanelRouter.get("/", (req: Request, res: Response) => {
	cPanelRouter.move("/panel", cPanelRouter);
	return res.redirect("cPanel/pages");
});

cPanelRouter.post(
	"/login",
	checkValidLogin,
	(req: Request, res: Response, next: NextFunction) => {
		const reqBody: ILoginCredentials = req.body;
		if (reqBody == null && !reqBody && reqBody) {
			res.send(401);
		} else {
			passwordHasher(reqBody, res);
			const token = generateToken(reqBody);
			const response = {
				authorizationType: "Bearer ",
				auth_token: token,
			};
			res.cookie("access_token", token, {
				expires: new Date(Date.now() + 1200),
			});
			res.send(response);
		}
	}
);

cPanelRouter.get(
	"/pages",
	// authenticateToken,
	(req: Request, res: Response) => {
		fetch.getAll(res, (rows) => {
			// return res.send({ data: rows });
			// console.table(rows);
			res.render("cPanel", { pages: rows });
		});
		// console.log(rows);
		// return cPanelRouter.move("/panel", cPanelRouter);
	}
);

cPanelRouter.get(["/delete:deleteId"], (req: Request, res: Response) => {
	const queryParams = req.query;
	const id = parseInt(req.params.deleteId)!;
	console.log(id, JSON.stringify(req.params));
	if (!id && id <= -1) {
		return res.send({
			status: 400,
			message: "Bad request",
		});
	}
	res.send({ id });
	// const pageIndex = pagesDb.findIndex((item) => item.id === id);

	// if (pageIndex == -1) {
	// 	return res.redirect("/404");
	// }
	// pagesDb.splice(pageIndex, 1);
	// const response = { mess: "success", id };
	// // res.redirect(goTo);
	// res.send({ id, goTo });
});
cPanelRouter.delete(["/delete:id"], (req: Request, res: Response) => {
	const id = parseInt(req.params.id)!;
	const goTo = req.params.goTo;
	console.log(id, goTo, req.params, req.body);
	if (!id && id <= -1) {
		return res.send({
			status: 400,
			message: "Bad request",
		});
	}
	res.send({ id, goTo });
});

export default cPanelRouter;
