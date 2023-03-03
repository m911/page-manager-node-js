import { Router, Request, Response } from "express";
// import renderer from "../utils/renderer";
const loginRouter = Router();

loginRouter.get("/", (req: Request, res: Response) => {
	const page = res.render("login.ejs", { title: "Login Page" });
});

export default loginRouter;
