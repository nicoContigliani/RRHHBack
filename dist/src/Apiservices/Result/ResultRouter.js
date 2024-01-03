"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ResultController_1 = require("./ResultController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', ResultController_1.get);
router.get('/:id', ResultController_1.getId);
router.post('/', ResultController_1.post);
router.post('/:id', ResultController_1.update);
router.delete('/:id', ResultController_1.deletes);
exports.default = router;
