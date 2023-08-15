"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("./UserController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', UserController_1.get);
router.get('/:id', UserController_1.getId);
router.post('/', UserController_1.post);
router.post('/:id', UserController_1.update);
router.delete('/:id', UserController_1.deletes);
exports.default = router;
