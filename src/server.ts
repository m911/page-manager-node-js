import express from "express";
import routes from "./routes";
import { CONFIG } from "./config/CONFIG";
import cors from "cors";
import cookieParser from "cookie-parser";

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
app.use(cookieParser());
app.use(routes);
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.listen(CONFIG.PORT, () => {
	console.log(`Server is running on port: ${CONFIG.PORT}`);
});
