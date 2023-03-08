"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sql = require("mssql/msnodesqlv8");
const config = {
    server: "localhost",
    database: "NodeDb",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true,
    },
};
async function getAll(table) {
    const err = await sql.connect(config);
    if (err)
        console.error("Dbcontext getPages " + err);
    const result = await new sql.Request()
        .input("table", table)
        .query(`SELECT * FROM ${table}`);
    return result.recordset;
}
async function getPageByUrl(url) {
    try {
        await sql.connect(config);
        const result = await new sql.Request()
            .input("name", url)
            .query("SELECT * FROM PagesData WHERE url=@name");
        return result.recordset.length > 0 ? result.recordset[0] : null;
    }
    catch (error) {
        console.error("Dbcontext getPageByUrl " + error);
        throw new Error(`Error getting page from url: ${url} error.message`);
    }
}
async function deletePage(id) {
    try {
        await sql.connect(config);
        const result = await new sql.Request()
            .input("id", id)
            .query("DELETE FROM PagesData WHERE id=@id SELECT * FROM PagesData WHERE id=@id");
        return result.rowsAffected[0];
    }
    catch (error) {
        throw new Error(`Error while deleting page with id: ${id}. The response is ${error.message}. Invoker is deletePage()`);
    }
}
//TODO: fix query
async function insertPage(page) {
    console.log(page);
    try {
        await sql.connect(config);
        const { title, metaDescription, pageContent, url } = page;
        console.log(page);
        const result = await new sql.Request()
            .query(`INSERT INTO PagesData (title, metaDescription, pageContent, url)
			VALUES ('${title}', '${metaDescription}', '${pageContent}', '${url}')
			`);
        // const result2 = await new sql.Request().query(
        // 	`SELECT * FROM PagesData WHERE url = '${url}`
        // );
        // console.log(result);
        return;
        // return result2.recordset.length > 0 ? result.recordset[0] : null;
    }
    catch (error) {
        throw new Error(`Error inserting page: ${error.message}`);
    }
}
async function getUser(username) {
    try {
        await sql.connect(config);
        const result = await new sql.Request()
            .input("username", username)
            .query("SELECT * FROM PagesData WHERE username=@username");
        return result.recordset.length > 0 ? result.recordset[0] : null;
    }
    catch (error) {
        console.error("getPageByUrl " + error);
        throw new Error(`Error getting user: ${username} error.message`);
    }
}
async function insertUser(user) {
    try {
        await sql.connect(config);
        const result = await new sql.Request().input("username", user.username)
            .query(`INSERT INTO Users (username, password) 
			VALUES ('${user.username}', '${user.username}');
			SELECT * FROM Users WHERE username = '${user.username};
			`);
        return result.recordset.length > 0 ? result.recordset[0] : null;
    }
    catch (error) {
        console.error("getPageByUrl " + error);
        throw new Error(`Error inserting user: ${user.username} error.message`);
    }
}
const tables = {
    pagesData: "PagesData",
    users: "Users",
};
const dbContext = {
    getAll,
    getPageByUrl,
    deletePage,
    insertPage,
    tables,
    getUser,
    insertUser,
};
exports.default = dbContext;
