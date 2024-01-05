"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const CVValidationSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    description_cv: joi_1.default.string().required(),
    status_cv: joi_1.default.boolean().required(),
    createdAt: joi_1.default.string(),
    updatedAt: joi_1.default.string(),
});
exports.default = CVValidationSchema;
