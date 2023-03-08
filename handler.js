"use strict";
const app = require("./src/server.ts");
import serverless from "serverless-http";
module.exports.hello = serverless(app);
