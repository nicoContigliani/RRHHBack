import Joi from 'joi';

const HardSkillValidationSchema = Joi.object({
name_HardSkill: Joi.string().required(),proficiency: Joi.string().required(),experienceYears: Joi.number().integer().required(),status_HardSkill: Joi.boolean().required(),initial_value_HardSkill: Joi.number().integer().required(),
});

export default HardSkillValidationSchema;

