"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BranchController_1 = require("./BranchController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', BranchController_1.get);
router.get('/:id', BranchController_1.getId);
router.post('/', BranchController_1.post);
router.post('/:id', BranchController_1.update);
router.delete('/:id', BranchController_1.deletes);
exports.default = router;
