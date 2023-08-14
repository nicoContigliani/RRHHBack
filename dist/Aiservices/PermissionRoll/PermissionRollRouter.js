"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PermissionRollController_1 = require("./PermissionRollController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', PermissionRollController_1.get);
router.get('/:id', PermissionRollController_1.getId);
router.post('/', PermissionRollController_1.post);
router.post('/:id', PermissionRollController_1.update);
router.delete('/:id', PermissionRollController_1.deletes);
exports.default = router;
