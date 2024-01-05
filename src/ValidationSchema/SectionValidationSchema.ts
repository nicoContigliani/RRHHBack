import Joi from 'joi';

const SectionValidationSchema = Joi.object({
    id: Joi.number().integer().optional(),
    SectionTypeId: Joi.number().integer().required(),
    title: Joi.string().required(),
    content: Joi.string().allow(null, ''),
    status_section: Joi.boolean().required(),
    createdAt: Joi.string(),
    updatedAt: Joi.string(),
});

export default SectionValidationSchema;

