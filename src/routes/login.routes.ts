import { Router, Request, Response } from "express";

const loginRouter = Router();
import ejs from "ejs";

loginRouter.get("/", (req: Request, res: Response) => {
	res.render("login.ejs");
});

export default loginRouter;
