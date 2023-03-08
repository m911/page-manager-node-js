"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderEjsFileNames = exports.renderNotauthorized = exports.renderServerError = exports.renderNotFound = exports.renderByUrl = void 0;
const dbContext_1 = __importDefault(require("../db/dbContext"));
const pagesNames = {
    notFound404: "404.ejs",
    internalServerError500: "500.ejs",
    index: "index.ejs",
    notAuthorized: "401.ejs",
};
async function renderByUrl(url, res, options) {
    const base = await dbContext_1.default.getPageByUrl(url);
    if (!base) {
        return res.render(pagesNames.notFound404);
    }
    res.render(pagesNames.index, base);
}
exports.renderByUrl = renderByUrl;
function renderNotFound(res) {
    return res.render(pagesNames.notFound404);
}
exports.renderNotFound = renderNotFound;
function renderServerError(res) {
    return res.render(pagesNames.internalServerError500);
}
exports.renderServerError = renderServerError;
function renderNotauthorized(res) {
    return res.render(pagesNames.notAuthorized);
}
exports.renderNotauthorized = renderNotauthorized;
function renderEjsFileNames(fileNames, res, opitons) {
    return res.render(pagesNames.index, { fileNames, ...opitons });
}
exports.renderEjsFileNames = renderEjsFileNames;
