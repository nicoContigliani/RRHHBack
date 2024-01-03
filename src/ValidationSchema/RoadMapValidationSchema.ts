import Joi from 'joi';

const RoadMapValidationSchema = Joi.object({
InterviewId: Joi.number().integer().required(),VacancyId: Joi.number().integer().required(),responsibilityDescription: Joi.string().required(),status_roadmap: Joi.boolean().required(),order: Joi.number().integer().required(),required: Joi.boolean().required(),duration: Joi.number().integer().required(),location: Joi.string().required(),scheduledDateTime: Joi.date().required(),completionDateTime: Joi.date().required(),outcome: Joi.string().required(),nextActionDateTime: Joi.date().required(),image: Joi.string().required(),
});

export default RoadMapValidationSchema;

