import Joi from 'joi';

const itemSectionValidationSchema = Joi.object({
ItemId: Joi.number().integer().required(),SectionId: Joi.number().integer().required(),position: Joi.number().integer().required(),title_atribute: Joi.string().required(),atribute: Joi.string().required(),detail_atribute: Joi.string().required(),status_item_section: Joi.boolean().required(),startDate: Joi.date().required(),endDate: Joi.date().required(),
});

export default itemSectionValidationSchema;

