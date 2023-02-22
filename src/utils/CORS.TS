import cors from "cors";
import { CorsOptionsDelegate } from "cors";
import { Request } from "express";

const whitelist = ["http://localhost:5500"];

export const corsOptionsDelegate = (req: any, callback: any) => {
	var corsOptions;
	if (whitelist.indexOf(req.header("Origin")) !== -1) {
		corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
	} else {
		corsOptions = { origin: false }; // disable CORS for this request
	}
	callback(null, corsOptions); // callback expects two parameters: error and options
};
module.exports = corsOptionsDelegate;
// export const corsOptionsDelegate = (req, callback): CorsOptionsDelegate => {
// 	var corsOptions;
// 	if (whitelist.indexOf(req.header("Origin")) !== -1) {
// 		corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
// 	} else {
// 		corsOptions = { origin: false }; // disable CORS for this request
// 	}
// 	callback(null, corsOptions); // callback expects two parameters: error and options
// };
