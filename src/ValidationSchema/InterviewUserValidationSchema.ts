import Joi from 'joi';

const InterviewUserValidationSchema = Joi.object({
InterViewId: Joi.number().integer().required(),UserId: Joi.number().integer().required(),userDescription: Joi.string().required(),status_interview_user: Joi.boolean().required(),
});

export default InterviewUserValidationSchema;

