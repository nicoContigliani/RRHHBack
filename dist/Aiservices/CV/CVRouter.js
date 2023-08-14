"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CVController_1 = require("./CVController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', CVController_1.get);
router.get('/:id', CVController_1.getId);
router.post('/', CVController_1.post);
router.post('/:id', CVController_1.update);
router.delete('/:id', CVController_1.deletes);
exports.default = router;
