"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Validator = (req, res, next) => {
    var _a, _b, _c, _d;
    const token = ((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.token) || ((_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.token) || req.header('auth-token') || ((_d = (_c = req.headers) === null || _c === void 0 ? void 0 : _c.authorization) === null || _d === void 0 ? void 0 : _d.split(" ")[1]);
    const tokenProcess = process.env.JWT_SIGNATURE_GENERAL;
    if (!token) {
        return res.status(403).send("Error 403 -  A token is required for authentication ");
    }
    try {
        const tokenValido = jsonwebtoken_1.default.verify(token, process.env.JWT_SIGNATURE_GENERAL || 'pepito123');
        // console.log("🚀 ~ file: validator.ts:16 ~ tokenValido:", tokenValido,"***************************")
        // console.log("🚀 ~ file: validator.ts:16 ~ tokenValido:", req?.url)
        const rutaActual = req.originalUrl;
        console.log("🚀 ~ file: validator.ts:22 ~ rutaActual:", rutaActual);
        if (req.method === 'GET') {
            // La solicitud viene de POST
            console.log("get");
        }
        else {
            // La solicitud viene de otro método
            console.log("****************************toma por mirón*******************************");
        }
        next();
    }
    catch (error) {
        res.status(400).json({
            error: 'token no valido'
        });
    }
    return true;
};
exports.Validator = Validator;
