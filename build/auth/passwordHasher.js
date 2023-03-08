"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordHasher = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const dbContext_1 = __importDefault(require("../db/dbContext"));
const passwordHasher = async (req, res) => {
    try {
        const hashedPassword = bcrypt_1.default.hashSync(req.password, 10);
        const userEntity = {
            username: req.username,
            password: hashedPassword,
        };
        await dbContext_1.default.insertUser(userEntity);
        return hashedPassword;
    }
    catch (error) {
        console.log("passwordHasher ", error.message);
    }
};
exports.passwordHasher = passwordHasher;
