import createPool from "mysql";
import mysql from "mysql";
import { NextFunction, Request } from "express";

const pool = mysql.createPool({
	host: ".",
	user: "test",
	password: "test",
	database: "NodeDb",
	connectionLimit: 10,
	multipleStatements: true,
});

export function getOne(url: string, req: Request): any {
	pool.getConnection(function (err: any, connection: any) {
		if (err) {
			console.log(err);
			throw new Error(err.message);
		}

		//If connection is successfully established
		pool.query(
			`SELECT * FROM PagesData WHERE url = ${url} OR id = ${req.query.id}`,
			(err: any, rows: any) => {
				if (err) {
					console.error(err);
					throw new Error(err.message);
				}
				connection.release();
				return rows;
			}
		);
	});
}
module.exports = { getPage: getOne };
