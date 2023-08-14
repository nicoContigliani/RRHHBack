import Joi from 'joi';

const SectionValidationSchema = Joi.object({
SectionTypeId: Joi.number().integer().required(),title: Joi.string().required(),content: Joi.string().required(),status_section: Joi.boolean().required(),
});

export default SectionValidationSchema;

