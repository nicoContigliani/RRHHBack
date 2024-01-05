"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const ItemValidationSchema = joi_1.default.object({
    //  id:Joi.number(),itemTitle: Joi.string().required(),itemContent: Joi.string(),status_item: Joi.boolean().required()
    id: joi_1.default.number().required(),
    itemTitle: joi_1.default.string().required(),
    itemContent: joi_1.default.string().allow(''),
    status_item: joi_1.default.boolean().required(),
    createdAt: joi_1.default.date().iso(),
    updatedAt: joi_1.default.date().iso(),
});
exports.default = ItemValidationSchema;
// "id": 609,
// "itemTitle": "hard_skill",
// "itemContent": "",
// "status_item": true,
// "createdAt": "2025-03-11T03:00:00.000Z",
// "updatedAt": "2025-03-11T03:00:00.000Z"
