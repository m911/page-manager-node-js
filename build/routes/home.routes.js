"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const homeRouter = (0, express_1.Router)();
homeRouter.get("/", (req, res) => {
    res.render("index.ejs", {
        title: "Home page",
        metaDescription: "Some meta ",
        pageContent: `<h1>Welcome to the page
	                <br>
	                <h3>
	                    If you are admin, please use the button on the navbar to get started.
	                </h3>
	            </h1>`,
    });
});
exports.default = homeRouter;
// module.exports = homeRouter;
