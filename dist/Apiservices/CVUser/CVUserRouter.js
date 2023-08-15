"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CVUserController_1 = require("./CVUserController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', CVUserController_1.get);
router.get('/:id', CVUserController_1.getId);
router.post('/', CVUserController_1.post);
router.post('/:id', CVUserController_1.update);
router.delete('/:id', CVUserController_1.deletes);
exports.default = router;
