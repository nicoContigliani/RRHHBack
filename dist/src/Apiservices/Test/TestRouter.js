"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TestController_1 = require("./TestController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', TestController_1.get);
router.get('/:id', TestController_1.getId);
router.post('/', TestController_1.post);
router.post('/:id', TestController_1.update);
router.delete('/:id', TestController_1.deletes);
exports.default = router;
