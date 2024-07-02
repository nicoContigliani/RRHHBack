"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const InterviewRoadMapController_1 = require("./InterviewRoadMapController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', InterviewRoadMapController_1.get);
router.get('/:id', InterviewRoadMapController_1.getId);
router.post('/', InterviewRoadMapController_1.post);
router.post('/:id', InterviewRoadMapController_1.update);
router.delete('/:id', InterviewRoadMapController_1.deletes);
exports.default = router;
