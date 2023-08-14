"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BrachUserController_1 = require("./BrachUserController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', BrachUserController_1.get);
router.get('/:id', BrachUserController_1.getId);
router.post('/', BrachUserController_1.post);
router.post('/:id', BrachUserController_1.update);
router.delete('/:id', BrachUserController_1.deletes);
exports.default = router;
