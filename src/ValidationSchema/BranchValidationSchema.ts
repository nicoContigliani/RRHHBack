import Joi from 'joi';

const BranchValidationSchema = Joi.object({
name_branch: Joi.string().required(),conditions: Joi.string().required(),idCompany: Joi.number().integer().required(),branch_long: Joi.string().required(),branch_lat: Joi.string().required(),branch_score: Joi.number().integer().required(),guest: Joi.number().integer().required(),status_branch: Joi.boolean().required(),
});

export default BranchValidationSchema;

