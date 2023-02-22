import { Router, Request, Response } from "express";
import cors from "cors";
import { corsOptionsDelegate } from "../utils/CORS";

const loginRouter = Router();

loginRouter.get("/", (req: Request, res: Response) => {
	res.render("login.ejs", { pageContent: "Text from DB" });
});

loginRouter.post(
	"/",
	cors(corsOptionsDelegate),
	(req: Request, res: Response) => {
		console.log(req.body);
		res.send(req.body);
	}
);

export default loginRouter;
