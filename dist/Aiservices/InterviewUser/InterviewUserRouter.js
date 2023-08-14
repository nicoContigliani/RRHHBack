"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const InterviewUserController_1 = require("./InterviewUserController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', InterviewUserController_1.get);
router.get('/:id', InterviewUserController_1.getId);
router.post('/', InterviewUserController_1.post);
router.post('/:id', InterviewUserController_1.update);
router.delete('/:id', InterviewUserController_1.deletes);
exports.default = router;
