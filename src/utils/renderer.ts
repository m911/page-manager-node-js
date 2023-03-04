import { Response } from "express";
import IPage from "../models/IPage";
import dbContext from "../db/query2";
import IRenderByCode from "../models/IrenderByCode";

const pagesNames: IRenderByCode = {
	notFound404: "404.ejs",
	internalServerError500: "500.ejs",
	index: "index.ejs",
	notAuthorized: "401.ejs",
};

async function renderByUrl(url: string, res: Response, options?: Object) {
	const base: IPage = await dbContext.getPageByUrl(url);
	if (!base) {
		return res.render(pagesNames.notFound404);
	}
	res.render(pagesNames.index, base);
}

function renderNotFound(res: Response) {
	return res.render(pagesNames.notFound404);
}
function renderServerError(res: Response) {
	return res.render(pagesNames.internalServerError500);
}
function renderNotauthorized(res: Response) {
	return res.render(pagesNames.notAuthorized);
}

export { renderByUrl, renderNotFound, renderServerError, renderNotauthorized };
