"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
const renderer_1 = require("../utils/renderer");
pageRouter.get("/:url", async (req, res) => {
    const url = req.params.url;
    (0, renderer_1.renderByUrl)(url, res);
});
exports.default = pageRouter;
