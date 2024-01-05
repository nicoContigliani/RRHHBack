"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const SectionValidationSchema = joi_1.default.object({
    id: joi_1.default.number().integer().optional(),
    SectionTypeId: joi_1.default.number().integer().required(),
    title: joi_1.default.string().required(),
    content: joi_1.default.string().allow(null, ''),
    status_section: joi_1.default.boolean().required(),
    createdAt: joi_1.default.string(),
    updatedAt: joi_1.default.string(),
});
exports.default = SectionValidationSchema;
