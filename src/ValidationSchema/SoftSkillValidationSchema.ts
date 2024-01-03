import Joi from 'joi';

const SoftSkillValidationSchema = Joi.object({
name_SoftSkill: Joi.string().required(),status_SoftSkill: Joi.boolean().required(),initial_value_SoftSkill: Joi.number().integer().required(),
});

export default SoftSkillValidationSchema;

