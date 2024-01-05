import Joi from 'joi';

const CVValidationSchema = Joi.object({
    title: Joi.string().required(),
    description_cv: Joi.string().required(),
    status_cv: Joi.boolean().required(),
    createdAt:Joi.string(),
    updatedAt:Joi.string(),
});

export default CVValidationSchema;

