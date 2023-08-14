import Joi from 'joi';

const ResultTestValidationSchema = Joi.object({
TestId: Joi.number().integer().required(),TesultId: Joi.number().integer().required(),status_result_test: Joi.boolean().required(),
});

export default ResultTestValidationSchema;

