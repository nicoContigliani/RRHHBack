"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const InterviewUserRouter_1 = __importDefault(require("../Apiservices/InterviewUser/InterviewUserRouter"));
const router = express_1.default.Router();
// Ruta
router.use('/InterviewUser', InterviewUserRouter_1.default);
exports.default = router;
