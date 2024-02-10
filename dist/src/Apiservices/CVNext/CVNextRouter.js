"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CVNextController_1 = require("./CVNextController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', CVNextController_1.get);
router.get('/:id', CVNextController_1.getId);
router.post('/', CVNextController_1.post);
router.post('/:id', CVNextController_1.update);
router.delete('/:id', CVNextController_1.deletes);
exports.default = router;
