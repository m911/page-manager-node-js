"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const renderer_1 = require("../utils/renderer");
const notFoundRouter = (0, express_1.Router)();
notFoundRouter.get("/", (req, res) => {
    (0, renderer_1.renderNotFound)(res);
});
exports.default = notFoundRouter;
