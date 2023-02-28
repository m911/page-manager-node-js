import mysql from "mysql";
import { NextFunction, Request, Response } from "express";
import IPage from "../models/IPage";
import { pagesDb } from "./db";

//Coonnect to the database
const pool = mysql.createPool({
	host: "127.0.0.1",
	user: "test",
	password: "someStrongPassword",
	database: "NodeDb",
	connectionLimit: 10,
	multipleStatements: true,
});
function getAll(res: Response, next: NextFunction): any {
	// Uncomment to line 33
	// pool.getConnection(function (err: any, connection: any) {
	// 	if (err) {
	// 		console.log(err);
	// 		return res.sendStatus(500);
	// 	}

	// 	//If connection is successfully established
	// 	pool.query(`SELECT * FROM PagesData`, (err: any, rows: IPage) => {
	// 		if (err) {
	// 			console.error(err);
	// 			return res.sendStatus(404);
	// 		}
	// 		connection.close();
	// 		console.log(rows);
	// 		return next(rows);
	// 	});
	// });

	//Returning mock results for the purpose of
	return next(pagesDb);
}

function getOne(
	url: string,
	req: Request,
	res: Response,
	next: NextFunction
): any {
	pool.getConnection(function (err: any, connection: any) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		//If connection is successfully established
		pool.query(
			`SELECT * FROM PagesData WHERE url = ${url} OR id = ${req.query.id}`,
			(err: any, rows: any) => {
				if (err) {
					console.error(err);
					return res.sendStatus(404);
				}
				connection.release();
				return next(rows);
			}
		);
	});
}

const fetch = {
	getAll,
	getOne,
};
export default fetch;
