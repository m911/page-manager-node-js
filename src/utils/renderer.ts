import { Response } from "express";
import { readFileSync, writeFileSync } from "fs";
import { CONFIG } from "../config/CONFIG";
import IRenderer from "../models/IRenderer";
import { pagesDb } from "../db/db";

export default function renderer(
	res: Response,
	options?: {
		writeToFile?: boolean;
		pageContent?: Buffer | string | any | undefined;
	}
): void {
	try {
		if (options && options.writeToFile) {
			res.setHeader("Content-Type", "text/html");
			const path = CONFIG.ROOT_PATH + "/pages/test.html";
			const page = pagesDb[0];
			writeFileSync(
				path,
				page.parts?.first + options.pageContent + page.parts?.second
			);
			const file = readFileSync(path);
			res.write(file);
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
	} catch {
		res.sendStatus(500);
	}
}
