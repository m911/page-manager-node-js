import { Router, Request, Response, NextFunction } from "express";
import { passwordHasher } from "../auth/passwordHasher";
import authenticateToken from "../middleware/authenticateToken";
import ILoginCredentials from "../models/ILoginCredentials";
import generateToken from "../auth/generateToken";
import { checkValidLogin } from "../middleware/checkValidLogin";
import dbContext from "../db/query2";

const cPanelRouter = Router();

cPanelRouter.get("/", (req: Request, res: Response) => {
	// cPanelRouter.move("/panel", cPanelRouter);
	// return res.redirect("cPanel/pages");

	res.render("cPanel.ejs");
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
		const pages = dbContext.getPages();
		
	}
);

cPanelRouter.get(
	"/new",
	// authenticateToken,
	(req: Request, res: Response) => {
		// renderer(res, { resCode: 4 });
	}
);

// cPanelRouter.get(["/delete/:deleteId"], (req: Request, res: Response) => {
// 	const id = parseInt(req.params.deleteId)!;
// 	const goTo = req.query;
// 	console.log(id, JSON.stringify(goTo));
// 	if (!id && id <= -1) {
// 		return res.send({
// 			status: 400,
// 			message: "Bad request",
// 		});
// 	}
// 	// res.send({ id, queryParams });
// 	const pageIndex = pagesDb.findIndex((item) => item.id === id);

// 	if (pageIndex == -1) {
// 		return renderer.renderByCode(404, res);
// 	}
// 	pagesDb.splice(pageIndex, 1);
// 	// const response = { mess: "success", id };
// 	// res.redirect(goTo);
// 	res.send({ id, goTo });
// });

export default cPanelRouter;
