"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const CompanyVacancesValidationSchema = joi_1.default.object({
    VacancyId: joi_1.default.number().integer().required(), UserId: joi_1.default.number().integer().required(), status_company_vacances: joi_1.default.boolean().required(),
});
exports.default = CompanyVacancesValidationSchema;
