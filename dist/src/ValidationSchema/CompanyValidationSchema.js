"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const CompanyValidationSchema = joi_1.default.object({
    id: joi_1.default.number(), company: joi_1.default.string().required(), companyPhone: joi_1.default.string().required(),
    companyEmail: joi_1.default.string().required(),
    urlCompany: joi_1.default.string().required(),
    status_company: joi_1.default.boolean().required(), updatedAt: joi_1.default.string(), createdAt: joi_1.default.string()
});
exports.default = CompanyValidationSchema;
