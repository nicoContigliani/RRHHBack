import Joi from 'joi';

const BranchShiftValidationSchema = Joi.object({
BranchId: Joi.number().integer().required(),ShiftId: Joi.number().integer().required(),status_branch_shift: Joi.boolean().required(), present_day: Joi.boolean().required(),delay_day: Joi.boolean().required(),
});

export default BranchShiftValidationSchema;

