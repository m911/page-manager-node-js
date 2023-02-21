import express from "express";
import http from "http";
// import { config } from "./config/config";
import Logger from "./library/Logger";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(3000, () => {
  console.log("Listening on port: 3000");
});
