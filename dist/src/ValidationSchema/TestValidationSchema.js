"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const TestValidationSchema = joi_1.default.object({
    typeTestId: joi_1.default.number().integer().required(), name_test: joi_1.default.string().required(), description_test: joi_1.default.string().required(), status_test: joi_1.default.boolean().required(),
});
exports.default = TestValidationSchema;
