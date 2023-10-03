"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const ResultTestValidationSchema = joi_1.default.object({
    TestId: joi_1.default.number().integer().required(), ResultId: joi_1.default.number().integer().required(), status_result_test: joi_1.default.boolean().required(),
});
exports.default = ResultTestValidationSchema;
