"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const config_1 = require("./config/config");
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
const allowedDomains = ["http://localhost:5500", "http://localhost:3000"];
app.use((0, cors_1.default)({
    origin: allowedDomains,
    methods: "*",
    allowedHeaders: "*",
}));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(routes_1.default);
app.use(express_1.default.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.listen(config_1.CONFIG.PORT, () => {
    console.log(`Server is running on port: ${config_1.CONFIG.PORT}`);
});
// module.exports = app;
