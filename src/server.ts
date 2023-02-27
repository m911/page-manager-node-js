import express from "express";
import routes from "./routes";
import { CONFIG } from "./config/CONFIG";
CONFIG.dotEnvConfig();
import cors from "cors";
import eslint from "eslint";

const app = express();
const allowedDomains = ["http://localhost:5500", "http://localhost:3000"];
app.use(
	cors({
		origin: allowedDomains,
		methods: "*",
		allowedHeaders: "*",
	})
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);
app.use(express.static(__dirname + "/pages"));
app.set("view engine", "ejs");
// app.use(eslint);

app.listen(process.env.PORT, () => {
	console.log(`Listening on port: ${process.env.PORT}`);
});
