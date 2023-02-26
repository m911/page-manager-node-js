import { Router, Request, Response } from "express";
import { pagesDb } from "../db/db";
import renderer from "../utils/renderer";
const loginRouter = Router();
import { readFileSync } from "fs";
import { CONFIG } from "../config/CONFIG";

// loginRouter.get("/", (req: Request, res: Response) => {
// 	const pageContent: string = mockDb[1].pageContent;
// 	renderer(res, {
// 		writeToFile: true,
// 		pageContent: pageContent,
// 	});
// });

export default loginRouter;
