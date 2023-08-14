import Joi from 'joi';

const ResultValidationSchema = Joi.object({
 result: Joi.string().required(),description_result_test: Joi.string().required(),status_result: Joi.boolean().required(),
});

export default ResultValidationSchema;

