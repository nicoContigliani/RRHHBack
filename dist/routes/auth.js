"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRouter_1 = __importDefault(require("../Aiservices/Auth/authRouter"));
const router = express_1.default.Router();
// Ruta de ejemplo
router.use('/Auth', authRouter_1.default);
exports.default = router;
