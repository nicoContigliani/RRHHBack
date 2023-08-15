"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const itemSectionController_1 = require("./itemSectionController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', itemSectionController_1.get);
router.get('/:id', itemSectionController_1.getId);
router.post('/', itemSectionController_1.post);
router.post('/:id', itemSectionController_1.update);
router.delete('/:id', itemSectionController_1.deletes);
exports.default = router;
