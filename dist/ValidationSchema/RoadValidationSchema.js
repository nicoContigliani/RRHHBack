"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const RoleValidationSchema = joi_1.default.object({
    name_role: joi_1.default.string().required(), status_role: joi_1.default.boolean().required(),
    InterviewId: joi_1.default.number().integer().required(),
    VacancyId: joi_1.default.number().integer().required(),
    responsibilityDescription: joi_1.default.string(),
    status_roadmap: joi_1.default.boolean().required(),
    order: joi_1.default.number().integer().required(),
    required: joi_1.default.boolean().required(),
    description: joi_1.default.string(),
    duration: joi_1.default.number().integer().required(),
    location: joi_1.default.string(),
    scheduledDateTime: joi_1.default.string().required(),
    completionDateTime: joi_1.default.string().required(),
    outcome: joi_1.default.string(),
    nextSteps: joi_1.default.string(),
    nextActionDateTime: joi_1.default.string().required()
});
exports.default = RoleValidationSchema;
