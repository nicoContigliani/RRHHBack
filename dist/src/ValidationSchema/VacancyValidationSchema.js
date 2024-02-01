"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const VacancyValidationSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    description: joi_1.default.string(),
    requirements: joi_1.default.string().required(),
    responsibilities: joi_1.default.string().required(),
    status_vacancy: joi_1.default.boolean().required(),
    status_vacancy_work: joi_1.default.string(),
    start_vacancy: joi_1.default.string(),
    finish_vacancy: joi_1.default.string(),
    TypeVacancyId: joi_1.default.number().integer().required(),
    extra_data: joi_1.default.string(),
    location: joi_1.default.string()
});
exports.default = VacancyValidationSchema;
