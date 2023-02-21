import { Router, Request, Response, response } from "express";

const loginRouter = Router();

loginRouter.get("/", (req: Request, res: Response) => {
	res.send("This is login page");
});

export default loginRouter;
