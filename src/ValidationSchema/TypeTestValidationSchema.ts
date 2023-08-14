import Joi from 'joi';

const TypeTestValidationSchema = Joi.object({
name_type_test: Joi.string().required(),description_type_test: Joi.string().required(),status_type_test: Joi.boolean().required(),
});

export default TypeTestValidationSchema;

