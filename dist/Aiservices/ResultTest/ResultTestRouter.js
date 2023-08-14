"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ResultTestController_1 = require("./ResultTestController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', ResultTestController_1.get);
router.get('/:id', ResultTestController_1.getId);
router.post('/', ResultTestController_1.post);
router.post('/:id', ResultTestController_1.update);
router.delete('/:id', ResultTestController_1.deletes);
exports.default = router;
