import Joi from 'joi';

const PriorityValidationSchema = Joi.object({
name_Priority: Joi.string().required(),jwtPriority: Joi.string().required(),status_Priority: Joi.boolean().required(),
});

export default PriorityValidationSchema;

