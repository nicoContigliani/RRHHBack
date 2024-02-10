"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CVRouter_1 = __importDefault(require("../Apiservices/CV/CVRouter"));
const validator_1 = require("../middlewares/validator");
const router = express_1.default.Router();
// Ruta
router.use('/CV', validator_1.Validator, CVRouter_1.default);
exports.default = router;
