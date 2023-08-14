"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PermissionController_1 = require("./PermissionController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', PermissionController_1.get);
router.get('/:id', PermissionController_1.getId);
router.post('/', PermissionController_1.post);
router.post('/:id', PermissionController_1.update);
router.delete('/:id', PermissionController_1.deletes);
exports.default = router;
