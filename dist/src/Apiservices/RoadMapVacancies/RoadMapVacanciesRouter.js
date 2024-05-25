"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RoadMapVacanciesController_1 = require("./RoadMapVacanciesController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', RoadMapVacanciesController_1.get);
router.get('/:id', RoadMapVacanciesController_1.getId);
router.post('/', RoadMapVacanciesController_1.post);
router.post('/:id', RoadMapVacanciesController_1.update);
router.delete('/:id', RoadMapVacanciesController_1.deletes);
exports.default = router;
