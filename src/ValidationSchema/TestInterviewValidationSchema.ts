import Joi from 'joi';

const TestInterviewValidationSchema = Joi.object({
CandidateId: Joi.number().integer().required(),TestId: Joi.number().integer().required(),interviewDateTime: Joi.date().required(),results: Joi.string().required(),comments: Joi.string().required(),InterviewId: Joi.number().integer().required(),status_test_inteview: Joi.boolean().required(),
});

export default TestInterviewValidationSchema;

