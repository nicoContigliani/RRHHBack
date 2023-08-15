"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const VacancyController_1 = require("./VacancyController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', VacancyController_1.get);
router.get('/:id', VacancyController_1.getId);
router.post('/', VacancyController_1.post);
router.post('/:id', VacancyController_1.update);
router.delete('/:id', VacancyController_1.deletes);
exports.default = router;
