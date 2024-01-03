"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CompanyVacancesController_1 = require("./CompanyVacancesController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', CompanyVacancesController_1.get);
router.get('/:id', CompanyVacancesController_1.getId);
router.post('/', CompanyVacancesController_1.post);
router.post('/:id', CompanyVacancesController_1.update);
router.delete('/:id', CompanyVacancesController_1.deletes);
exports.default = router;
