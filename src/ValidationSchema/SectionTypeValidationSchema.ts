import Joi from 'joi';

const SectionTypeValidationSchema = Joi.object({
name_section_type: Joi.string().required(),description_section_type: Joi.string().required(),status_section_type: Joi.boolean().required(),
});

export default SectionTypeValidationSchema;

