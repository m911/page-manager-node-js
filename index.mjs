import { connect, Request } from "mssql/msnodesqlv8";

const config = {
	server: "localhost",
	database: "NodeDb",
	driver: "msnodesqlv8",
	options: {
		trustedConnection: true,
	},
};

function getAll(res, next) {
	connect(config, function (err) {
		if (err) console.error(err);
		const request = new Request();
		request.query("SELECT * FROM PagesData", function (err, result) {
			if (err) console.error(err);
			else console.log(result.recordset);
		});
	});
}

function getOne() {}

getAll();
