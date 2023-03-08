"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const renderer_1 = require("../utils/renderer");
function authenticateToken(req, res, next) {
    const cookieToken = req.cookies.access_token;
    if (cookieToken == null) {
        return (0, renderer_1.renderNotauthorized)(res);
    }
    jsonwebtoken_1.default.verify(cookieToken, process.env.TOKEN_SECRET, (err, data) => {
        if (err) {
            return res.redirect("/login");
        }
        next();
    });
}
exports.default = authenticateToken;
