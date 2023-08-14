import Joi from 'joi';

const CVUserValidationSchema = Joi.object({
UserId: Joi.number().integer().required(),CVId: Joi.number().integer().required(),status_cv_user: Joi.boolean().required(),
});

export default CVUserValidationSchema;

