import Joi from 'joi';

const TypeInterviewValidationSchema = Joi.object({
name_type_test: Joi.string().required(),description_type_test: Joi.string().required(),status_Type_interview: Joi.boolean().required(),
});

export default TypeInterviewValidationSchema;

