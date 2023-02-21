import Logger from "../library/Logger";

const createPool = require("mysql");

const pool = createPool({
  host: "localhost",
  user: "admin",
  password: "",
  database: "NodeDb",
  connectionLimit: 10,
  // port: 5432,
});

pool.query("SELECT * FROM PagesData", (err: any, result: any, fields: any) => {
  if (err) {
    return Logger.error(err);
  }
  return result;
});

pool.

module.exports = pool;
