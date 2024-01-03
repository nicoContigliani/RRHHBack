import Joi from 'joi';

const BenefitValidationSchema = Joi.object({
name_Benefit: Joi.string().required(),validity: Joi.string().required(),status_Benefit: Joi.boolean().required(),initial_value_Benefit: Joi.number().integer().required(),
});

export default BenefitValidationSchema;

