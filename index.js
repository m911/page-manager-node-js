const express = require("express");
const Logger = require("nodemon/lib/utils/log");

const app = express();

app.listen(3000, Logger.log("Listening on port: 3000"));
