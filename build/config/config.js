"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
exports.CONFIG = {
    PORT: 3000,
    ROOT_PATH: "./src",
    BASE_URL: "http://localhost:3000",
    dotEnvConfig: () => dotenv_1.default.config(),
};
