import { Router, Request, Response, NextFunction } from "express";
const loginSuccessRoute = Router();
// import renderer from "../utils/renderer";
import dbContext from "../db/query2";
import authenticateToken from "../middleware/authenticateToken";

loginSuccessRoute.get(
	"/",
	authenticateToken,
	(req: Request, res: Response, next: NextFunction) => {
		// renderer(res, { resCode: 3 });
	}
);
export default loginSuccessRoute;
