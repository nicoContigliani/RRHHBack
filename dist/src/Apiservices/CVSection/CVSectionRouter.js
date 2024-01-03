"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CVSectionController_1 = require("./CVSectionController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', CVSectionController_1.get);
router.get('/:id', CVSectionController_1.getId);
router.post('/', CVSectionController_1.post);
router.post('/:id', CVSectionController_1.update);
router.delete('/:id', CVSectionController_1.deletes);
exports.default = router;
