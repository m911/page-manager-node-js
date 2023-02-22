import createPool from "mysql";
import mysql from "mysql";
import { NextFunction, Request } from "express";

const pool = mysql.createPool({
	host: "localhost",
	// user: "admin",
	// password: "",
	database: "NodeDb",
	connectionLimit: 10,
	multipleStatements: true,
	// port: 5432,
});

export function getPage(url: string, req: Request): any {
	pool.getConnection(function (err: any, connection: any) {
		if (err) {
			console.log(err);
			throw new Error(err.message);
		}

		//If connection is successfully established
		pool.query(
			`SELECT * FROM PagesData WHERE url = ${url} OR id = ${req.params.id}`,
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
module.exports = { getPage };
