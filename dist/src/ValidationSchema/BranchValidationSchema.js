"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const BranchValidationSchema = joi_1.default.object({
    name_branch: joi_1.default.string().required(), conditions: joi_1.default.string().required(), idCompany: joi_1.default.number().integer().required(), branch_long: joi_1.default.string().required(), branch_lat: joi_1.default.string().required(), branch_score: joi_1.default.number().integer().required(), guest: joi_1.default.number().integer().required(), status_branch: joi_1.default.boolean().required(),
});
exports.default = BranchValidationSchema;
