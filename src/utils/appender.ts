import { Request, Response } from "express";
import fs from "fs";

const renderer = (
	fileUrl: string,
	req: Request,
	res: Response,
	inputData?: { data: string }
) => {
	res.writeHead(200, { "content-type": "text/html" });
	const data = fs.readFileSync(fileUrl);
	res.write(data);
	res.end();
};

export default renderer;
