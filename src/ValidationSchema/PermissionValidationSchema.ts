import Joi from 'joi';

const PermissionValidationSchema = Joi.object({
name_permission: Joi.string().required(),conditions: Joi.string().required(),code: Joi.string().required(),creates: Joi.boolean().required(),reads: Joi.boolean().required(),updates: Joi.boolean().required(),deletes: Joi.boolean().required(),admins: Joi.boolean().required(),exports: Joi.boolean().required(),imports: Joi.boolean().required(),approve: Joi.boolean().required(),generate_reports: Joi.boolean().required(),configure: Joi.boolean().required(),restrict: Joi.boolean().required(),manage_users: Joi.boolean().required(),manage_roles: Joi.boolean().required(),audit: Joi.boolean().required(),status_permission: Joi.boolean().required(),
});

export default PermissionValidationSchema;

