"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const HardSkillValidationSchema = joi_1.default.object({
    name_HardSkill: joi_1.default.string().required(), proficiency: joi_1.default.string().required(), experienceYears: joi_1.default.number().integer().required(), status_HardSkill: joi_1.default.boolean().required(), initial_value_HardSkill: joi_1.default.number().integer().required(),
});
exports.default = HardSkillValidationSchema;
