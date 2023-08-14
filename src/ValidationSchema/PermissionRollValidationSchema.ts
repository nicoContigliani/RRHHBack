import Joi from 'joi';

const PermissionRollValidationSchema = Joi.object({
RoleId: Joi.number().integer().required(),PermissionId: Joi.number().integer().required(),status_permission_roll: Joi.boolean().required(),
});

export default PermissionRollValidationSchema;

