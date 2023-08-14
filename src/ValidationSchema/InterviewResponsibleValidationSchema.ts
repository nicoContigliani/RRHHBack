import Joi from 'joi';

const InterviewResponsibleValidationSchema = Joi.object({
InterViewId: Joi.number().integer().required(),UserId: Joi.number().integer().required(),responsibilityDescription: Joi.string().required(),status_interview_responsible: Joi.boolean().required(),
});

export default InterviewResponsibleValidationSchema;

