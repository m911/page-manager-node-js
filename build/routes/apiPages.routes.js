"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dbContext_1 = __importDefault(require("../db/dbContext"));
const apiPagesRouter = (0, express_1.Router)();
apiPagesRouter.get("/", async (req, res) => {
    const pages = await dbContext_1.default.getAll(dbContext_1.default.tables.pagesData);
    res.json(pages);
});
exports.default = apiPagesRouter;
