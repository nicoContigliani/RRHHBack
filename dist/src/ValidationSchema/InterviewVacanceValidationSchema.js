"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const InterviewVacanceValidationSchema = joi_1.default.object({
    InterviewId: joi_1.default.number().integer().required(),
    VacancyId: joi_1.default.number().integer().required(),
    interviewDateTime: joi_1.default.date().required(),
    results: joi_1.default.string().required(),
    comments: joi_1.default.string().required(),
    status_interview_vacancy_type: joi_1.default.boolean().required(),
});
exports.default = InterviewVacanceValidationSchema;
