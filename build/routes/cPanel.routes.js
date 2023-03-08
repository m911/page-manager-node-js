"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticateToken_1 = __importDefault(require("../middleware/authenticateToken"));
const dbContext_1 = __importDefault(require("../db/dbContext"));
const renderer_1 = require("../utils/renderer");
const cPanelRouter = (0, express_1.Router)();
cPanelRouter.get("/", authenticateToken_1.default, (req, res) => {
    (0, renderer_1.renderEjsFileNames)(["cPanel.ejs"], res);
});
cPanelRouter.get("/new", authenticateToken_1.default, (req, res) => {
    (0, renderer_1.renderEjsFileNames)(["newPage.ejs"], res, { title: "Create New Page" });
});
cPanelRouter.post("/new", authenticateToken_1.default, (req, res) => {
    console.log(req.body);
    const page = req.body;
    dbContext_1.default.insertPage(page);
    // res.redirect("/cPanel");
    res.send(page);
});
cPanelRouter.delete("/:pageId", authenticateToken_1.default, async (req, res) => {
    const id = parseInt(req.params.pageId);
    const countDeleted = await dbContext_1.default.deletePage(id);
    res.json({ pagesDeleted: countDeleted });
});
exports.default = cPanelRouter;
