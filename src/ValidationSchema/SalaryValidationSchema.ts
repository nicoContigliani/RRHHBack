import Joi from 'joi';

const SalaryValidationSchema = Joi.object({
amount: Joi.number().integer().required(),currency: Joi.string().required(),status_Salary: Joi.boolean().required(),initial_value_Salary: Joi.number().integer().required(),
});

export default SalaryValidationSchema;

