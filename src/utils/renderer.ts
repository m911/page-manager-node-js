import { Response } from "express";
import { readFileSync, writeFileSync } from "fs";
import { CONFIG } from "../config/CONFIG";
import IRenderer from "../models/IRenderer";

export default function renderer(
	res: Response,
	options?: {
		writeToFile?: boolean;
		pageContent?: Buffer | string | any | undefined;
	}
): void {
	if (options && options.writeToFile) {
		res.setHeader("Content-Type", "text/html");
		const path = CONFIG.ROOT_PATH + "/pages/test.html";
		writeFileSync(path, options.pageContent);
		const file = readFileSync(path);
		// res.write(file);
		res.write(options.pageContent);
		res.end();
	} else {
		res.render(
			"home.ejs",
			{ pageContent: options?.pageContent }

			// (err, html) => {
			// 	{
			// 		console.log(err);
			// 		throw new Error(err.message);
			// 	}
			// 	// html = mockPage.content;
			// }
		);
	}
}
