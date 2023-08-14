"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SectionTypeController_1 = require("./SectionTypeController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', SectionTypeController_1.get);
router.get('/:id', SectionTypeController_1.getId);
router.post('/', SectionTypeController_1.post);
router.post('/:id', SectionTypeController_1.update);
router.delete('/:id', SectionTypeController_1.deletes);
exports.default = router;
