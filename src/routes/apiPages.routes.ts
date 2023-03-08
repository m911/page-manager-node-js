import { Router, Request, Response } from "express";
import dbContext from "../db/dbContext";

const apiPagesRouter = Router();

apiPagesRouter.get("/", async (req: Request, res: Response) => {
	const pages = await dbContext.getAll(dbContext.tables.pagesData);
	res.json(pages);
});

export default apiPagesRouter;
