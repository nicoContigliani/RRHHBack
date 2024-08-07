"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtCompareToken = exports.jwtGenerateTokenCol = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const jwtGenerateTokenCol = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let secretKey = process.env.JWT_COL || "simon";
        // if (typeof data !== 'object' || data === null || Array.isArray(data)) {
        //     throw new Error('Invalid payload: Expected an object.');
        // }
        const token = jsonwebtoken_1.default.sign({ data }, secretKey, { expiresIn: '10000h' });
        return token;
    }
    catch (error) {
        console.log("🚀 ~ jwtGenerateTokenCol ~ error:", error);
        throw error; // Re-throw the error to ensure it can be handled upstream
    }
});
exports.jwtGenerateTokenCol = jwtGenerateTokenCol;
const jwtCompareToken = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.jwtCompareToken = jwtCompareToken;
