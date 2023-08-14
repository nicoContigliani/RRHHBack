import Joi from 'joi';

const BrachUserValidationSchema = Joi.object({
UserId: Joi.number().integer().required(),BranchId: Joi.number().integer().required(),status_branch_user: Joi.boolean().required(),
});

export default BrachUserValidationSchema;

