"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const InterviewRoadMapValidationSchema = joi_1.default.object({
    InterviewId: joi_1.default.number().integer().required(),
    RoadMapId: joi_1.default.number().integer().required(),
    status_InterviewRoadMap: joi_1.default.boolean().required(),
    comments: joi_1.default.string().optional(),
    statusProgres: joi_1.default.string().optional(),
    sequence: joi_1.default.number().optional(),
    interviewee: joi_1.default.string().optional(),
    position: joi_1.default.string().optional(),
    notes: joi_1.default.string().optional(),
    descriptions: joi_1.default.string().optional(),
    createdAt: joi_1.default.date().optional(),
    updatedAt: joi_1.default.date().optional(),
});
exports.default = InterviewRoadMapValidationSchema;
