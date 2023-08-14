import Joi from 'joi';

const TypeShiftValidationSchema = Joi.object({
name_type_shift: Joi.string().required(),description_type_shift: Joi.string().required(),status_type_shift: Joi.boolean().required(),hours: Joi.number().integer().required(),
});

export default TypeShiftValidationSchema;

