import { Response } from "express";
import { readFileSync, writeFileSync } from "fs";
import { CONFIG } from "../config/CONFIG";
import IRenderer from "../models/IRenderer";
import { pagesDb } from "../db/db";
import IPage from "../models/IPage";

export default function renderer(
	res: Response,
	options?: {
		url?: string;
		pageContent?: Buffer | string | string[] | Buffer[];
		pageId?: number;
	}
): void {
	res.setHeader("Content-Type", "text/html");
	const base = pagesDb.find((p) => p.url === "/")!.parts!;
	const page: number = options?.pageId
		? options.pageId
		: options?.url
		? pagesDb.findIndex((p) => p.url === options.url)
		: -1;

	if (page != 1) {
		// res.send(base?.head + pagesDb[page].pageContent + base?.second);
		res.send(base.header + pagesDb[page].pageContent + base?.footer);
	} else if (options?.pageContent) {
		res.send(base.header + options.pageContent + base.footer);
	} else {
		const notFound = pagesDb.find((p) => p.url === "404")!;
		res.send(base.header + notFound.pageContent + base.footer);
		res.sendStatus(500);
	}
}
