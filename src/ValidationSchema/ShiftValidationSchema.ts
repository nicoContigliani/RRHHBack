import Joi from 'joi';

const ShiftValidationSchema = Joi.object({
name: Joi.string().required(),start_time: Joi.string().required(),end_time: Joi.string().required(),status_shift: Joi.boolean().required(),TypeshiptId: Joi.number().integer().required(),
});

export default ShiftValidationSchema;

