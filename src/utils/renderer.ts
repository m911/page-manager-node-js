import { Response } from "express";
import IPage from "../models/IPage";
import dbContext from "../db/query2";

// export default function renderer(
// 	res: Response,
// 	options?: {
// 		url?: string;
// 		pageContent?: Buffer | string | string[] | Buffer[];
// 		pageId?: number;
// 	}
// ): void {

const pagesNames = {
	notFound404: "404.ejs",
	internalServerError500: "500.ejs",
	index: "index.ejs",
};

export const renderObject = {
	renderByUrl: function (url: string, res: Response, options: Object) {
		const base: IPage | undefined = dbContext
			.getAll()
			.find((p) => p.url === url);
		if (!base) res.render(pagesNames.notFound404);
		res.render(pagesNames.index, base);
	},
	renderByCode: function (code: number, res: Response, options: Object) {
		if (!Object.keys(pagesNames).includes(code.toString()))
			res.render(pagesNames.notFound404);
		res.render(pagesNames.index);
	},
};

export default renderObject;
