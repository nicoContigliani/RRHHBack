"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SectionController_1 = require("./SectionController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', SectionController_1.get);
router.get('/:id', SectionController_1.getId);
router.post('/', SectionController_1.post);
router.post('/:id', SectionController_1.update);
router.delete('/:id', SectionController_1.deletes);
exports.default = router;
