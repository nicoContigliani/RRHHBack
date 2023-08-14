import Joi from 'joi';

const InterviewVacanceValidationSchema = Joi.object({
InterviewId: Joi.number().integer().required(),VacancyId: Joi.number().integer().required(),interviewDateTime: Joi.date().required(),results: Joi.string().required(),comments: Joi.string().required(),status_interview_vacancy_type: Joi.boolean().required(),
});

export default InterviewVacanceValidationSchema;

