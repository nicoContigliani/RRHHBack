"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const InterviewResponsibleValidationSchema = joi_1.default.object({
    InterviewId: joi_1.default.number().integer().required(), RoadMapId: joi_1.default.number().integer().required(), UserId: joi_1.default.number().integer().required(), responsibilityDescription: joi_1.default.string().required(), status_interview_responsible: joi_1.default.boolean().required(),
});
exports.default = InterviewResponsibleValidationSchema;
