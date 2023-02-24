import { Router, Request, Response, response, NextFunction } from "express";
const homeRouter = Router();
import renderer from "../utils/renderer";

// homeRouter.get("/", (req: Request, res: Response) => {
// 	renderer(res, { pageContent: "Mitko" });
// });
export default homeRouter;
