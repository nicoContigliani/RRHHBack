"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CompanyController_1 = require("./CompanyController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', CompanyController_1.get);
router.get('/:id', CompanyController_1.getId);
router.post('/', CompanyController_1.post);
router.post('/:id', CompanyController_1.update);
router.delete('/:id', CompanyController_1.deletes);
exports.default = router;
