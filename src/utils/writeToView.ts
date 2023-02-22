import { Response } from "express";

export default function viewWriter(res: Response, pageContent: string): void {
	res.render(
		"home.ejs",
		{ pageContent: pageContent }
		// (err, html) => {
		// 	{
		// 		console.log(err);
		// 		throw new Error(err.message);
		// 	}
		// 	// html = mockPage.content;
		// }
	);
}
