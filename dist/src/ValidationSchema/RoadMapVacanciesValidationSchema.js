"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const RoadMapValidationSchema = joi_1.default.object({
    VacancyId: joi_1.default.number().integer().required(), RoadMapId: joi_1.default.number().integer().required(), status_RoadMapVacance: joi_1.default.boolean().required(), comments: joi_1.default.string().required(), statusProgres: joi_1.default.string().required()
});
exports.default = RoadMapValidationSchema;
