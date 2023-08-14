"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const InterviewValidationSchema = joi_1.default.object({
    interviewDateTime: joi_1.default.date().required(), interviewType: joi_1.default.string().required(), interviewers: joi_1.default.string().required(), interviewMethod: joi_1.default.string().required(), duration: joi_1.default.number().integer().required(), rating: joi_1.default.number().required(), comments: joi_1.default.string().required(), inerview_result: joi_1.default.string().required(), requiredActions: joi_1.default.string().required(), nextActionDateTime: joi_1.default.date().required(), interview_status: joi_1.default.boolean().required(), TypeInterviewId: joi_1.default.number().integer().required(),
});
exports.default = InterviewValidationSchema;
