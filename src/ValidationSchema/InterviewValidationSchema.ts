import Joi from 'joi';

const InterviewValidationSchema = Joi.object({
interviewDateTime: Joi.date().required(),interviewType: Joi.string().required(),interviewers: Joi.string().required(),interviewMethod: Joi.string().required(),duration: Joi.number().integer().required(),rating: Joi.number().required(),comments: Joi.string().required(),inerview_result: Joi.string().required(),requiredActions: Joi.string().required(),nextActionDateTime: Joi.date().required(),interview_status: Joi.boolean().required(),TypeInterviewId: Joi.number().integer().required(),
});

export default InterviewValidationSchema;

