"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AssistantGetController_1 = require("./AssistantGetController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', AssistantGetController_1.get);
router.get('/:id', AssistantGetController_1.getId);
router.post('/', AssistantGetController_1.post);
router.post('/:id', AssistantGetController_1.update);
router.delete('/:id', AssistantGetController_1.deletes);
exports.default = router;
