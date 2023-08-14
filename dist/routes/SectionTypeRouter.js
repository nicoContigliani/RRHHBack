"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SectionTypeRouter_1 = __importDefault(require("../Aiservices/SectionType/SectionTypeRouter"));
const router = express_1.default.Router();
// Ruta
router.use('/SectionType', SectionTypeRouter_1.default);
exports.default = router;
