"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const InterviewResponsibleController_1 = require("./InterviewResponsibleController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', InterviewResponsibleController_1.get);
router.get('/:id', InterviewResponsibleController_1.getId);
router.post('/', InterviewResponsibleController_1.post);
router.post('/:id', InterviewResponsibleController_1.update);
router.delete('/:id', InterviewResponsibleController_1.deletes);
exports.default = router;
