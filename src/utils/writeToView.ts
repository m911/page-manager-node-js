import { Response } from "express";
import { appendFileSync } from "fs";
import { appendFile } from "fs/promises";
import { fileURLToPath } from "url";

export default function viewWriter(res: Response, pageContent: string): void {
	res.render(
		"home.ejs",
		{
			caches: true,
			filename: "./home.ejs",
			pageContent: pageContent,
		}
		// (err, html) => {
		// 	{
		// 		console.log(err);
		// 		throw new Error(err.message);
		// 	}
		// 	// html = mockPage.content;
		// }
	);
}
