"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const PermissionValidationSchema = joi_1.default.object({
    name_permission: joi_1.default.string().required(), conditions: joi_1.default.string().required(), code: joi_1.default.string().required(), creates: joi_1.default.boolean().required(), reads: joi_1.default.boolean().required(), updates: joi_1.default.boolean().required(), deletes: joi_1.default.boolean().required(), admins: joi_1.default.boolean().required(), exports: joi_1.default.boolean().required(), imports: joi_1.default.boolean().required(), approve: joi_1.default.boolean().required(), generate_reports: joi_1.default.boolean().required(), configure: joi_1.default.boolean().required(), restrict: joi_1.default.boolean().required(), manage_users: joi_1.default.boolean().required(), manage_roles: joi_1.default.boolean().required(), audit: joi_1.default.boolean().required(), status_permission: joi_1.default.boolean().required(),
});
exports.default = PermissionValidationSchema;
