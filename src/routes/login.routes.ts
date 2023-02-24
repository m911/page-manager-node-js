import { Router, Request, Response } from "express";
import { mockDb } from "../db/mockDb";
import renderer from "../utils/renderer";
const loginRouter = Router();
import { readFileSync } from "fs";
import { CONFIG } from "../config/CONFIG";
CONFIG;

// loginRouter.get("/", (req: Request, res: Response) => {
// 	const pageContent: string = mockDb[1].pageContent;
// 	const pageContent2 = readFileSync(
// 		CONFIG.ROOT_PATH + "/pages/login/index.html"
// 	);
// 	renderer(res, {
// 		writeToFile: true,
// 		pageContent: pageContent,
// 	});
// });

export default loginRouter;
