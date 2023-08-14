"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const TypeTestValidationSchema = joi_1.default.object({
    name_type_test: joi_1.default.string().required(), description_type_test: joi_1.default.string().required(), status_type_test: joi_1.default.boolean().required(),
});
exports.default = TypeTestValidationSchema;
