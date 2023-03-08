"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generateToken_1 = __importDefault(require("../auth/generateToken"));
const passwordHasher_1 = require("../auth/passwordHasher");
const checkValidLogin_1 = require("../middleware/checkValidLogin");
const loginRouter = (0, express_1.Router)();
const renderer_1 = require("../utils/renderer");
loginRouter.get("/", (req, res) => {
    const ejses = ["login.ejs"];
    (0, renderer_1.renderEjsFileNames)(ejses, res);
});
loginRouter.post("/", checkValidLogin_1.checkValidLogin, (req, res, next) => {
    const reqBody = req.body;
    if (reqBody == null && !reqBody && reqBody) {
        return res.send(401);
    }
    (0, passwordHasher_1.passwordHasher)(reqBody, res);
    const token = (0, generateToken_1.default)(reqBody);
    res.cookie("access_token", token.access_token);
    res.send({
        statusCode: 200,
        message: "Successfully logged in",
    });
});
exports.default = loginRouter;
