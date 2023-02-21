import express from "express";
import http from "http";
import Logger from "./library/Logger";
import routes from "./routes";
import { Request, Response } from "express";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
	console.log(`Listening on port: ${3000}`);
});
// app.listen(process.env.PORT, () => {
//   console.log(`Listening on port: ${process.env.PORT}`);
// });
