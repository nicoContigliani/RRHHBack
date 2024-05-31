import Joi from 'joi';

const InterviewResponsibleValidationSchema = Joi.object({
    InterviewId: Joi.number().integer().required(),
    RoadMapId: Joi.number().integer().required(),
    UserId: Joi.number().integer().required(),
    responsibilityDescription: Joi.string().required(),
    status_interview_responsible: Joi.boolean().required(),
});

export default InterviewResponsibleValidationSchema;

// {"InterviewId":1,
// "RoadMapId":1,
// "UserId":1,
// "responsibilityDescription":"",
// "status_interview_responsible":""
// }