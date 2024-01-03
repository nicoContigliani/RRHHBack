"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TypeTestController_1 = require("./TypeTestController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', TypeTestController_1.get);
router.get('/:id', TypeTestController_1.getId);
router.post('/', TypeTestController_1.post);
router.post('/:id', TypeTestController_1.update);
router.delete('/:id', TypeTestController_1.deletes);
exports.default = router;
