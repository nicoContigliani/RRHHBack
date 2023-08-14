import Joi from 'joi';

const CVValidationSchema = Joi.object({
title: Joi.string().required(),description_cv: Joi.string().required(),status_cv: Joi.boolean().required(),
});

export default CVValidationSchema;

