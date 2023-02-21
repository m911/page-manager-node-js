import { Router, Request, Response, response } from "express";

const homeRouter = Router();

homeRouter.get("/", (req: Request, res: Response) => {
	res.send("This is home page");
});

homeRouter.post("/", (req: Request, res: Response) => {
	res.send({
		data: req.body,
	});
});
export default homeRouter;
