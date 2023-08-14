import Joi from 'joi';

const ItemValidationSchema = Joi.object({
itemTitle: Joi.string().required(),itemContent: Joi.string().required(),status_item: Joi.boolean().required(),
});

export default ItemValidationSchema;

