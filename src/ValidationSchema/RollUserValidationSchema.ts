import Joi from 'joi';

const RollUserValidationSchema = Joi.object({
UserId: Joi.number().integer().required(),
RoleId: Joi.number().integer().required(),
status_role_user: Joi.boolean().required(),
});

export default RollUserValidationSchema;

