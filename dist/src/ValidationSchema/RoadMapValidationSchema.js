"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const RoadMapValidationSchema = joi_1.default.object({
    InterviewId: joi_1.default.number().integer().required(), VacancyId: joi_1.default.number().integer().required(), responsibilityDescription: joi_1.default.string().required(), status_roadmap: joi_1.default.boolean().required(), order: joi_1.default.number().integer().required(), required: joi_1.default.boolean().required(), duration: joi_1.default.number().integer().required(), location: joi_1.default.string().required(), scheduledDateTime: joi_1.default.date().required(), completionDateTime: joi_1.default.date().required(), outcome: joi_1.default.string().required(), nextActionDateTime: joi_1.default.date().required(), image: joi_1.default.string().required(),
});
exports.default = RoadMapValidationSchema;
