import Joi from 'joi';

const ItemValidationSchema = Joi.object({
//  id:Joi.number(),itemTitle: Joi.string().required(),itemContent: Joi.string(),status_item: Joi.boolean().required()
id: Joi.number().required(),
itemTitle: Joi.string().required(),
itemContent: Joi.string().allow(''), // Permite que itemContent esté vacío
status_item: Joi.boolean().required(),
createdAt: Joi.date().iso(),
updatedAt: Joi.date().iso(),
});

export default ItemValidationSchema;

// "id": 609,
// "itemTitle": "hard_skill",
// "itemContent": "",
// "status_item": true,
// "createdAt": "2025-03-11T03:00:00.000Z",
// "updatedAt": "2025-03-11T03:00:00.000Z"