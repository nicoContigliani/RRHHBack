"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ItemController_1 = require("./ItemController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', ItemController_1.get);
router.get('/:id', ItemController_1.getId);
router.post('/', ItemController_1.post);
router.post('/:id', ItemController_1.update);
router.delete('/:id', ItemController_1.deletes);
exports.default = router;
