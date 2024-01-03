"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const ShiftValidationSchema = joi_1.default.object({
    name: joi_1.default.string().required(), status_shift: joi_1.default.boolean().required(), TypeshiptId: joi_1.default.number().integer().required(),
});
exports.default = ShiftValidationSchema;
