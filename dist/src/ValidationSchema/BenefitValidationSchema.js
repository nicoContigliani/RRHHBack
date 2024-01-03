"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const BenefitValidationSchema = joi_1.default.object({
    name_Benefit: joi_1.default.string().required(), validity: joi_1.default.string().required(), status_Benefit: joi_1.default.boolean().required(), initial_value_Benefit: joi_1.default.number().integer().required(),
});
exports.default = BenefitValidationSchema;
