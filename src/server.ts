import express from "express";
import http from "http";
import Logger from "./library/Logger";
import routes from "./routes";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.post("/", (req, res) => {
  res.send({
    data: req.body,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
