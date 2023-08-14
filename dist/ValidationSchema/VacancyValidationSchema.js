"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const VacancyValidationSchema = joi_1.default.object({
    title: joi_1.default.string().required(), description: joi_1.default.string().required(), requirements: joi_1.default.string().required(), responsibilities: joi_1.default.string().required(), status_vacancy: joi_1.default.boolean().required(), TypeVacancyId: joi_1.default.number().integer().required(),
});
exports.default = VacancyValidationSchema;
