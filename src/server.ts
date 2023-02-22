import express from "express";
import routes from "./routes";
import dotenv from "dotenv";
import { CONFIG } from "./config/config";
CONFIG.dotEnvConfig();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);
app.set("view-engine", "ejs");

app.listen(process.env.PORT, () => {
	console.log(`Listening on port: ${process.env.PORT}`);
});
