"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const InterviewRoadMapRouter_1 = __importDefault(require("../Apiservices/InterviewRoadMap/InterviewRoadMapRouter"));
const router = express_1.default.Router();
// Ruta
router.use('/InterviewRoadMaps', InterviewRoadMapRouter_1.default);
exports.default = router;
