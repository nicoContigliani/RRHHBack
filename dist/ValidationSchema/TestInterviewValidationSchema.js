"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const TestInterviewValidationSchema = joi_1.default.object({
    CandidateId: joi_1.default.number().integer().required(), TestId: joi_1.default.number().integer().required(), interviewDateTime: joi_1.default.date().required(), results: joi_1.default.string().required(), comments: joi_1.default.string().required(), InterviewId: joi_1.default.number().integer().required(), status_test_inteview: joi_1.default.boolean().required(),
});
exports.default = TestInterviewValidationSchema;
