"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TypeVacancyController_1 = require("./TypeVacancyController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', TypeVacancyController_1.get);
router.get('/:id', TypeVacancyController_1.getId);
router.post('/', TypeVacancyController_1.post);
router.post('/:id', TypeVacancyController_1.update);
router.delete('/:id', TypeVacancyController_1.deletes);
exports.default = router;
