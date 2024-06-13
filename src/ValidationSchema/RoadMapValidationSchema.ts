import Joi from 'joi';

const RoadMapValidationSchema = Joi.object({
    // InterviewId: Joi.number().integer().required(),
    VacancyId: Joi.number().integer().required(),
    responsibilityDescription: Joi.string().required(),
    status_roadmap: Joi.boolean().required(),
    required: Joi.string().required(),
    description: Joi.string().required(),
    duration: Joi.number().integer().required(),
    location: Joi.string().optional(),
    scheduledDateTime: Joi.string().required(),
    start_DateTime: Joi.date().required(),
    finish_DateTime: Joi.date().required(),
    completionDateTime: Joi.string().optional(),
    outcome: Joi.string().required(),
    before_steps: Joi.string().optional(),
    after_steps: Joi.string().optional(),
    nextActionDateTime: Joi.string().optional(),
    image: Joi.string().optional(),
    all_Steps: Joi.number().integer().required(),
    order_Steps: Joi.string().optional(),
    createdAt: Joi.date().optional(),
    updatedAt: Joi.date().optional(),
    array_interview_responsible_and_user: Joi.array().optional().allow(null)

});

export default RoadMapValidationSchema;
const todo = [{
}]