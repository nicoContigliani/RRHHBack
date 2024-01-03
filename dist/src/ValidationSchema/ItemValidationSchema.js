"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const ItemValidationSchema = joi_1.default.object({
    itemTitle: joi_1.default.string().required(), itemContent: joi_1.default.string().required(), status_item: joi_1.default.boolean().required(),
});
exports.default = ItemValidationSchema;
