"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const RoadMapValidationSchema = joi_1.default.object({
    // InterviewId: Joi.number().integer().required(),
    // VacancyId: Joi.number().integer().required(),
    // responsibilityDescription: Joi.string().required(),
    // status_roadmap: Joi.boolean().required(),
    // order: Joi.number().integer().required(),
    // required: Joi.boolean().required(),
    // duration: Joi.number().integer().required(),
    // location: Joi.string().required(),
    // scheduledDateTime: Joi.date().required(),
    // completionDateTime: Joi.date().required(),
    // outcome: Joi.string().required(),
    // nextActionDateTime: Joi.date().required(),
    // image: Joi.string().required(),
    InterviewId: joi_1.default.number().integer().required(),
    VacancyId: joi_1.default.number().integer().required(),
    responsibilityDescription: joi_1.default.string().required(),
    status_roadmap: joi_1.default.boolean().required(),
    required: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    duration: joi_1.default.number().integer().required(),
    location: joi_1.default.string().required(),
    scheduledDateTime: joi_1.default.string().required(),
    start_DateTime: joi_1.default.date().required(),
    finish_DateTime: joi_1.default.date().required(),
    completionDateTime: joi_1.default.string().required(),
    outcome: joi_1.default.string().required(),
    before_steps: joi_1.default.string().required(),
    after_steps: joi_1.default.string().required(),
    nextActionDateTime: joi_1.default.string().required(),
    image: joi_1.default.string().required(),
    all_Steps: joi_1.default.number().integer().required(),
    order_Steps: joi_1.default.string().required(),
    createdAt: joi_1.default.date().required(),
    updatedAt: joi_1.default.date().required(),
});
exports.default = RoadMapValidationSchema;
const todo = [{}];
