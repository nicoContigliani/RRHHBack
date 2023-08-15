"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TypeInterviewController_1 = require("./TypeInterviewController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', TypeInterviewController_1.get);
router.get('/:id', TypeInterviewController_1.getId);
router.post('/', TypeInterviewController_1.post);
router.post('/:id', TypeInterviewController_1.update);
router.delete('/:id', TypeInterviewController_1.deletes);
exports.default = router;
