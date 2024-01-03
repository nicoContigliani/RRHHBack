import Joi from 'joi';

const URLValidationSchema = Joi.object({
link: Joi.string().required(),status_URL: Joi.boolean().required(),initial_value_URL: Joi.number().integer().required(),
});

export default URLValidationSchema;

