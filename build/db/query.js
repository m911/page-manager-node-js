"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __importDefault(require("../library/Logger"));
const createPool = require("mysql");
const pool = createPool({
    host: "localhost",
    user: "admin",
    password: "",
    database: "NodeDb",
    connectionLimit: 10,
    // port: 5432,
});
pool.query("SELECT * FROM PagesData", (err, result, fields) => {
    if (err) {
        return Logger_1.default.error(err);
    }
    return result;
});
module.exports = pool;
