"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const InterviewVacanceController_1 = require("./InterviewVacanceController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', InterviewVacanceController_1.get);
router.get('/:id', InterviewVacanceController_1.getId);
router.post('/', InterviewVacanceController_1.post);
router.post('/:id', InterviewVacanceController_1.update);
router.delete('/:id', InterviewVacanceController_1.deletes);
exports.default = router;
