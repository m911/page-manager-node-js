import { Router, Request, Response } from "express";
import { pagesDb } from "../db/db";
import renderer from "../utils/renderer";
const loginRouter = Router();

loginRouter.get("/", (req: Request, res: Response) => {
	const url = req.url.split("/").pop();
	//     new URL(request.url, `http://${request.getHeaders().host}`);
	// When request.url is '/status?name=ryan' andrequest.getHeaders().host is 'localhost:3000':

	// $ node
	// > new URL(request.url, `http://${request.getHeaders().host}`)
	// URL {
	//   href: 'http://localhost:3000/status?name=ryan',
	//   origin: 'http://localhost:3000',
	//   protocol: 'http:',
	//   username: '',
	//   password: '',
	//   host: 'localhost:3000',
	//   hostname: 'localhost',
	//   port: '3000',
	//   pathname: '/status',
	//   search: '?name=ryan',
	//   searchParams: URLSearchParams { 'name' => 'ryan' },
	//   hash: ''
	// }
	const page = res.render("login.ejs", { title: "Login" });
});

export default loginRouter;
