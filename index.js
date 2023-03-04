const sql = require("mssql/msnodesqlv8");

const config = {
	server: "localhost",
	database: "NodeDb",
	driver: "msnodesqlv8",
	options: {
		trustedConnection: true,
	},
};


async function getAll() {
	const url = "mitko";
	try {
		await sql.connect(config);

		const result = await new sql.Request().query(
			`declare @url nvarchar(max) = '${url.trim()}';
			SELECT * FROM PagesData WHERE url=@url;`
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
		console.error("getPageByUrl " + error);
		throw new Error("");
	}
}

function getOne() {}

getAll();
