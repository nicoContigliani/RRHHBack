import Joi from 'joi';

const RoleValidationSchema = Joi.object({
name_role: Joi.string().required(),status_role: Joi.boolean().required(),
});

export default RoleValidationSchema;

