"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_routes_1 = __importDefault(require("./login.routes"));
const cPanel_routes_1 = __importDefault(require("./cPanel.routes"));
const page_routes_1 = __importDefault(require("./page.routes"));
const apiPages_routes_1 = __importDefault(require("./apiPages.routes"));
const home_routes_1 = __importDefault(require("./home.routes"));
const notFound_routes_1 = __importDefault(require("./notFound.routes"));
const routes = (0, express_1.Router)();
//TODO: [PM-2] redirect to 404 if not found
// routes.get("*", homeRouter);
routes.use("/login", login_routes_1.default);
routes.use("/cPanel", cPanel_routes_1.default);
routes.use("/pages", page_routes_1.default);
routes.use("/api/pages", apiPages_routes_1.default);
routes.use("/", home_routes_1.default);
routes.use("/404", notFound_routes_1.default);
routes.use("/401", notFound_routes_1.default);
exports.default = routes;
