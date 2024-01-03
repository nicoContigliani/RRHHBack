"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const PermissionRollValidationSchema = joi_1.default.object({
    RoleId: joi_1.default.number().integer().required(), PermissionId: joi_1.default.number().integer().required(), status_permission_roll: joi_1.default.boolean().required(),
});
exports.default = PermissionRollValidationSchema;
