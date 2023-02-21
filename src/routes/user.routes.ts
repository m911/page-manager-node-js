import { Router, Request, Response, response } from "express";

const userRouter = Router();

userRouter.get("/", (req: Request, res: Response) => {
  return res.json("OK");
});

export default userRouter;
