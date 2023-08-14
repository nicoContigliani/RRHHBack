import Joi from 'joi';

const itemSectionValidationSchema = Joi.object({
ItemId: Joi.number().integer().required(),SectionId: Joi.number().integer().required(),position: Joi.number().integer().required(),atribute: Joi.string().required(),status_item_section: Joi.boolean().required(),
});

export default itemSectionValidationSchema;

