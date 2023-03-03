import { Response } from "express";
import { pagesDb } from "../db/db";
import IPage from "../models/IPage";

// export default function renderer(
// 	res: Response,
// 	options?: {
// 		url?: string;
// 		pageContent?: Buffer | string | string[] | Buffer[];
// 		pageId?: number;
// 	}
// ): void {
// 	res.setHeader("Content-Type", "text/html");
// 	const base = pagesDb.find((p) => p.url === "/")!.parts!;
// 	const page: number = options?.pageId
// 		? options.pageId
// 		: options?.url
// 		? pagesDb.findIndex((p) => p.url === options.url)
// 		: -1;

// 	if (page != 1) {
// 		// res.send(base?.head + pagesDb[page].pageContent + base?.second);
// 		res.send(base.header + pagesDb[page].pageContent + base?.footer);
// 	} else if (options?.pageContent) {
// 		res.send(base.header + options.pageContent + base.footer);
// 	} else {
// 		const notFound = pagesDb.find((p) => p.url === "404")!;
// 		res.send(base.header + notFound.pageContent + base.footer);
// 		res.sendStatus(500);
// 	}
// }

export default function renderer(
	res: Response,
	options: {
		resCode?: number;
		url?: string;
		pageContent?: string | Buffer | Buffer[] | string[];
	}
): void {
	res.setHeader("Content-Type", "text/html");
	const base: IPage = pagesDb.find((p) => p.url === "/")!;
	const page: number = options.resCode
		? options.resCode
		: options.url
		? pagesDb.findIndex((p) => p.url === options.url)
		: -1;
	const pageOptions = {
		title: base.title,
		metaDescription: base.metaDescription,
		pageContent: options.pageContent ?? base.pageContent,
	};

	if (page != 1) {
		res.render("index.ejs", pageOptions);
	} else {
		res.render(pagesNumbers[404]);
	}
}
const pagesNumbers = {
	404: "404.ejs",
	500: "500.ejs",
};

