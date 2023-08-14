import Joi from 'joi';

const TestValidationSchema = Joi.object({
typeTestId: Joi.number().integer().required(),name_test: Joi.string().required(),description_test: Joi.string().required(),status_test: Joi.boolean().required(),
});

export default TestValidationSchema;

