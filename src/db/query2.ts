import mysql from "mysql";
import { NextFunction, Request, Response } from "express";
import IPage from "../models/IPage";
const sql = require("mssql/msnodesqlv8");

const config = {
	server: "localhost",
	database: "NodeDb",
	driver: "msnodesqlv8",
	options: {
		trustedConnection: true,
	},
};

async function getPages() {
	const err = await sql.connect(config);
	if (err) console.error(err);

	const result = await new sql.Request().query("SELECT * FROM PagesData");
	return result.recordset;
}

async function getPageByUrl(url: string) {
	try {
		await sql.connect(config);

		const result = await new sql.Request().query(
			`declare @url nvarchar(max) = 'mitko' 'select * from PagesData' 
			SELECT * FROM PagesData WHERE url=@${url}`
			// `SELECT * FROM PagesData WHERE url='${url}'`
		);

		// const result1 = await new sql.Request().query(
		// declare @url nvarchar(max) = 'mitko SELECT * FROM asdasd'
		// SELECT * FROM PagesData WHERE url=@url
		// 	`SELECT * FROM PagesData WHERE url=@p`,
		// 	{ p123: url }
		// );

		return result.recordset.length > 0 ? result.recordset[0] : null;
	} catch (error) {
		console.error(error);
		throw new Error("");
	}
}

const dbContext = {
	getPages,
	getPageByUrl,
};
export default dbContext;
