"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ShiftController_1 = require("./ShiftController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', ShiftController_1.get);
router.get('/:id', ShiftController_1.getId);
router.post('/', ShiftController_1.post);
router.post('/:id', ShiftController_1.update);
router.delete('/:id', ShiftController_1.deletes);
exports.default = router;
