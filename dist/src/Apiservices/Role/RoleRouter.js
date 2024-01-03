"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RoleController_1 = require("./RoleController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', RoleController_1.get);
router.get('/:id', RoleController_1.getId);
router.post('/', RoleController_1.post);
router.post('/:id', RoleController_1.update);
router.delete('/:id', RoleController_1.deletes);
exports.default = router;
