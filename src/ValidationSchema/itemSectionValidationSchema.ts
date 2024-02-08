import Joi from 'joi';

const itemSectionValidationSchema = Joi.object({
    id:Joi.number().allow(null, ""),
    ItemId: Joi.number().integer().required(),
    SectionId: Joi.number().integer().required(),
    position: Joi.number().integer().required(),
    title_atribute: Joi.string().required(),
    atribute: Joi.string().required(),
    detail_atribute: Joi.string().allow(null, ""),
    status_item_section: Joi.boolean().required(),
    startDate: Joi.string().optional(),
    endDate: Joi.string().optional(),
    createdAt: Joi.string(),
    updatedAt: Joi.string()
});

export default itemSectionValidationSchema;

