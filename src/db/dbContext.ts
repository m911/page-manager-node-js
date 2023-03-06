import ILoginCredentials from "../models/ILoginCredentials";
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

async function getAll(table: string): Promise<IPage[]> {
	const err = await sql.connect(config);
	if (err) console.error("getPages " + err);

	const result = await new sql.Request().query(`SELECT * FROM ${table}`);
	return result.recordset;
}

async function getPageByUrl(url: string): Promise<IPage> {
	try {
		await sql.connect(config);

		const result = await new sql.Request()
			.input("name", url)
			.query("SELECT * FROM PagesData WHERE url=@name");

		return result.recordset.length > 0 ? result.recordset[0] : null;
	} catch (error: any) {
		console.error("getPageByUrl " + error);
		throw new Error(`Error getting page from url: ${url} error.message`);
	}
}

async function deletePage(id: number): Promise<number> {
	try {
		await sql.connect(config);

		const result = await new sql.Request()
			.input("id", id)
			.query(
				"DELETE FROM PagesData WHERE id=@id SELECT * FROM PagesData WHERE id=@id"
			);
		return result.rowsAffected[0];
	} catch (error: any) {
		throw new Error(
			`Error while deleting page with id: ${id}. The response is ${error.message}. Invoker is deletePage()`
		);
	}
}

//TODO: fix query
async function insertPage(page: IPage): Promise<IPage> {
	try {
		await sql.connect(config);
		const { title, metaDescription, pageContent, url } = page;
		const result = await new sql.Request()
			.query(`INSERT INTO PagesData (title, metaDescription, pageContent, url)
			VALUES ('${title}', '${metaDescription}', '${pageContent}', '${url}');
			SELECT * FROM PagesData WHERE url = '${url};
			`);

		return result.recordset.length > 0 ? result.recordset[0] : null;
	} catch (error: any) {
		throw new Error(`Error inserting page: ${error.message}`);
	}
}

async function getUser(username: string): Promise<IPage> {
	try {
		await sql.connect(config);

		const result = await new sql.Request()
			.input("username", username)
			.query("SELECT * FROM PagesData WHERE username=@username");

		return result.recordset.length > 0 ? result.recordset[0] : null;
	} catch (error: any) {
		console.error("getPageByUrl " + error);
		throw new Error(`Error getting page from url: ${username} error.message`);
	}
}

async function insertUser(user: ILoginCredentials): Promise<IPage> {
	try {
		await sql.connect(config);

		const result = await new sql.Request().input("username", user.username)
			.query(`INSERT INTO Users (username, password) 
			VALUES ('${user.username}', '${user.username}');
			SELECT * FROM Users WHERE username = '${user.username};
			`);

		return result.recordset.length > 0 ? result.recordset[0] : null;
	} catch (error: any) {
		console.error("getPageByUrl " + error);
		throw new Error(`Error getting page from url: ${username} error.message`);
	}
}

const tables = {
	pagesData: "PagesData",
	users: "Users",
};

const dbContext = {
	getAll,
	getPageByUrl,
	deletePage,
	insertPage,
	tables,
	getUser,
	insertUser,
};
export default dbContext;
