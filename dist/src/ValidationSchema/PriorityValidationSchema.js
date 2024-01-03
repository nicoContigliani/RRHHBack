"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const PriorityValidationSchema = joi_1.default.object({
    name_Priority: joi_1.default.string().required(), jwtPriority: joi_1.default.string().required(), status_Priority: joi_1.default.boolean().required(),
});
exports.default = PriorityValidationSchema;
