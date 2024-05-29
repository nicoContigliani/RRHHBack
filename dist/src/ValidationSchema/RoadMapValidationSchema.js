"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const RoadMapValidationSchema = joi_1.default.object({
    InterviewId: joi_1.default.number().integer().required(),
    VacancyId: joi_1.default.number().integer().required(),
    responsibilityDescription: joi_1.default.string().required(),
    status_roadmap: joi_1.default.boolean().required(),
    required: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    duration: joi_1.default.number().integer().required(),
    location: joi_1.default.string().optional(),
    scheduledDateTime: joi_1.default.string().required(),
    start_DateTime: joi_1.default.date().required(),
    finish_DateTime: joi_1.default.date().required(),
    completionDateTime: joi_1.default.string().optional(),
    outcome: joi_1.default.string().required(),
    before_steps: joi_1.default.string().optional(),
    after_steps: joi_1.default.string().optional(),
    nextActionDateTime: joi_1.default.string().optional(),
    image: joi_1.default.string().optional(),
    all_Steps: joi_1.default.number().integer().required(),
    order_Steps: joi_1.default.string().optional(),
    createdAt: joi_1.default.date().optional(),
    updatedAt: joi_1.default.date().optional(),
});
exports.default = RoadMapValidationSchema;
const todo = [{}];
