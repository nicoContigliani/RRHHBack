"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const InterviewController_1 = require("./InterviewController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', InterviewController_1.get);
router.get('/:id', InterviewController_1.getId);
router.post('/', InterviewController_1.post);
router.post('/:id', InterviewController_1.update);
router.delete('/:id', InterviewController_1.deletes);
exports.default = router;
