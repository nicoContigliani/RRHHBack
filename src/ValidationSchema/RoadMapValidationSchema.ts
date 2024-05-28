import Joi from 'joi';

const RoadMapValidationSchema = Joi.object({
    // InterviewId: Joi.number().integer().required(),
    // VacancyId: Joi.number().integer().required(),
    // responsibilityDescription: Joi.string().required(),
    // status_roadmap: Joi.boolean().required(),
    // order: Joi.number().integer().required(),
    // required: Joi.boolean().required(),
    // duration: Joi.number().integer().required(),
    // location: Joi.string().required(),
    // scheduledDateTime: Joi.date().required(),
    // completionDateTime: Joi.date().required(),
    // outcome: Joi.string().required(),
    // nextActionDateTime: Joi.date().required(),
    // image: Joi.string().required(),
    InterviewId: Joi.number().integer().required(),
    VacancyId: Joi.number().integer().required(),
    responsibilityDescription: Joi.string().required(),
    status_roadmap: Joi.boolean().required(),
    required: Joi.string().required(),
    description: Joi.string().required(),
    duration: Joi.number().integer().required(),
    location: Joi.string().required(),
    scheduledDateTime: Joi.string().required(),
    start_DateTime: Joi.date().required(),
    finish_DateTime: Joi.date().required(),
    completionDateTime: Joi.string().required(),
    outcome: Joi.string().required(),
    before_steps: Joi.string().required(),
    after_steps: Joi.string().required(),
    nextActionDateTime: Joi.string().required(),
    image: Joi.string().required(),
    all_Steps: Joi.number().integer().required(),
    order_Steps: Joi.string().required(),
    createdAt: Joi.date().required(),
    updatedAt: Joi.date().required(),
});

export default RoadMapValidationSchema;
const todo = [{
}]