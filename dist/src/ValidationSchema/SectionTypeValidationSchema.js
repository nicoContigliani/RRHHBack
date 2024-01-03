"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const SectionTypeValidationSchema = joi_1.default.object({
    name_section_type: joi_1.default.string().required(), description_section_type: joi_1.default.string().required(), status_section_type: joi_1.default.boolean().required(),
});
exports.default = SectionTypeValidationSchema;
