"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const SigInValidationSchema = joi_1.default.object({
    email: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
    fullname: joi_1.default.string().required(),
    phone: joi_1.default.string().required(),
    birthday: joi_1.default.string(),
    Score: joi_1.default.number().integer(),
    status_user: joi_1.default.boolean().required(),
});
exports.default = SigInValidationSchema;
