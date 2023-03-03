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

function getAll(res: Response, next: NextFunction): IPage[] {
	return sql.connect(config, function (err: any) {
		if (err) console.error(err);
		const request = new sql.Request();
		request.query("SELECT * FROM PagesData", function (err: any, result: any) {
			if (err) console.error(err);
			return result.recordset;
		});
	});
}

function getOne() {}

const dbContext = {
	getAll,
	getOne,
};
export default dbContext;
