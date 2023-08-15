"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TestInterviewController_1 = require("./TestInterviewController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', TestInterviewController_1.get);
router.get('/:id', TestInterviewController_1.getId);
router.post('/', TestInterviewController_1.post);
router.post('/:id', TestInterviewController_1.update);
router.delete('/:id', TestInterviewController_1.deletes);
exports.default = router;
