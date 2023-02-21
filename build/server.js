"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { config } from "./config/config";
const Logger_1 = __importDefault(require("./library/Logger"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Welcome");
});
app.listen(3000, () => {
    Logger_1.default.log("Listening on port: 3000");
});
