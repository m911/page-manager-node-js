"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkValidLogin = void 0;
const dbContext_1 = __importDefault(require("../db/dbContext"));
const renderer_1 = require("../utils/renderer");
const checkValidLogin = async (req, res, next) => {
    const { getAll, tables } = dbContext_1.default;
    const reqBody = req.body;
    if (reqBody.password == null || reqBody.username == null) {
        return res.sendStatus(403);
    }
    const users = await dbContext_1.default.getAll(tables.users);
    const userIndex = users.findIndex((user) => user.username === reqBody.username && user.password === reqBody.password);
    console.log(userIndex);
    if (userIndex == -1) {
        return (0, renderer_1.renderNotauthorized)(res);
    }
    next();
};
exports.checkValidLogin = checkValidLogin;
