"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const BranchShiftValidationSchema = joi_1.default.object({
    BranchId: joi_1.default.number().integer().required(), ShiftId: joi_1.default.number().integer().required(), status_branch_shift: joi_1.default.boolean().required(), present_day: joi_1.default.boolean().required(), delay_day: joi_1.default.boolean().required(),
});
exports.default = BranchShiftValidationSchema;
