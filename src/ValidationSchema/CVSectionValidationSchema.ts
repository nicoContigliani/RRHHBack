import Joi from 'joi';

const CVSectionValidationSchema = Joi.object({
    CVId: Joi.number().integer().required(),
    SectionId: Joi.number().integer().required(),
    position: Joi.number().integer().required(),
    describle_cv_section: Joi.string().allow(null, ''),
    status_cv_section: Joi.boolean().required(),
    createdAt: Joi.string(),
    updatedAt: Joi.string(),

});

export default CVSectionValidationSchema;

