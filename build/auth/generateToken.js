"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const ms = require("ms");
dotenv_1.default.config();
const generateToken = (userCredentials) => {
    const token = jsonwebtoken_1.default.sign({ data: userCredentials.username }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.EXPIRESIN,
    });
    const response = {
        access_token: token,
        expires_in: ms(process.env.EXPIRESIN),
        cookie_key: "access_token",
    };
    return response;
};
exports.default = generateToken;
