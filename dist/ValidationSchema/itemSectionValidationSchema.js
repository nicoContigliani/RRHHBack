"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const itemSectionValidationSchema = joi_1.default.object({
    ItemId: joi_1.default.number().integer().required(),
    SectionId: joi_1.default.number().integer().required(),
    position: joi_1.default.number().integer().required(),
    atribute: joi_1.default.string().required(),
    status_item_section: joi_1.default.boolean().required()
});
exports.default = itemSectionValidationSchema;
