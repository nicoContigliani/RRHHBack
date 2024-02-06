"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const RollUserValidationSchema = joi_1.default.object({
    UserId: joi_1.default.number().integer().required(),
    RoleId: joi_1.default.number().integer().required(),
    status_role_user: joi_1.default.boolean().required(),
});
exports.default = RollUserValidationSchema;
