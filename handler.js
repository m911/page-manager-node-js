"use strict";
const app = require("./server.ts");
import serverless from "serverless-http";
module.exports.hello = serverless(app);
