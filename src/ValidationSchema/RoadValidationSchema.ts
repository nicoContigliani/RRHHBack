import Joi from 'joi';

const RoleValidationSchema = Joi.object({
name_role: Joi.string().required(),status_role: Joi.boolean().required(),
InterviewId: Joi.number().integer().required(),
VacancyId: Joi.number().integer().required(),
responsibilityDescription: Joi.string(),
status_roadmap: Joi.boolean().required(),
order: Joi.number().integer().required(),
required:  Joi.boolean().required(),
description: Joi.string(),
duration:  Joi.number().integer().required(),
location: Joi.string(),
scheduledDateTime: Joi.string().required(),
completionDateTime:  Joi.string().required(),
outcome: Joi.string(),
nextSteps:Joi.string(),
nextActionDateTime:  Joi.string().required()


});

export default RoleValidationSchema;

