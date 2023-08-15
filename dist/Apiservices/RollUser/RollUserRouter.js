"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RollUserController_1 = require("./RollUserController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', RollUserController_1.get);
router.get('/:id', RollUserController_1.getId);
router.post('/', RollUserController_1.post);
router.post('/:id', RollUserController_1.update);
router.delete('/:id', RollUserController_1.deletes);
exports.default = router;
