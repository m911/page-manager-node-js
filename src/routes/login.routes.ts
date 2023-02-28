import { Router, Request, Response } from "express";
import { pagesDb } from "../db/db";
import renderer from "../utils/renderer";
const loginRouter = Router();

loginRouter.get("/", (req: Request, res: Response) => {
	const url = req.url.split("/").slice(1);
	const page = res.render("login.ejs", { title: "Login" });
});

export default loginRouter;
