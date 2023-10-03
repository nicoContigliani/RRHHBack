"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const InterviewRoadMapValidationSchema = joi_1.default.object({
    InterviewId: joi_1.default.number().integer().required(), RoadMapId: joi_1.default.number().integer().required(), status_InterviewRoadMap: joi_1.default.boolean().required(),
});
exports.default = InterviewRoadMapValidationSchema;
