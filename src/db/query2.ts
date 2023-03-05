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

async function getPages(): Promise<IPage[]> {
	const err = await sql.connect(config);
	if (err) console.error("getPages " + err);

	const result = await new sql.Request().query("SELECT * FROM PagesData");
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

const dbContext = {
	getPages,
	getPageByUrl,
	deletePage,
};
export default dbContext;
