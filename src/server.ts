import express from "express";
import routes from "./routes";
import { CONFIG } from "./config/CONFIG";
CONFIG.dotEnvConfig();
import cors from "cors";

const app = express();
app.use(
	cors({
		origin: "http://localhost:5500",
	})
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);
app.set("view-engine", "ejs");

app.listen(process.env.PORT, () => {
	console.log(`Listening on port: ${process.env.PORT}`);
});
