import { Router, Request, Response, response, NextFunction } from "express";
import { getPage } from "../db/query";
import { mockDb } from "../db/mockDb";
const homeRouter = Router();
import { writeFileSync, readFile, appendFile, appendFileSync } from "fs";
import renderer from "../utils/renderer";

homeRouter.get("/", (req: Request, res: Response) => {
	renderer(res);
});
export default homeRouter;
