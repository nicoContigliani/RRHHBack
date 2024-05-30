import Joi from 'joi';

const InterviewRoadMapValidationSchema = Joi.object({
    InterviewId: Joi.number().integer().required(),
    RoadMapId: Joi.number().integer().required(),
    status_InterviewRoadMap: Joi.boolean().required(),
    comments: Joi.string().optional(),               
    statusProgres: Joi.string().optional(),
    sequence: Joi.number().optional(),
    interviewee: Joi.string().optional(),
    position: Joi.string().optional(),
    notes: Joi.string().optional(),
    descriptions: Joi.string().optional(),
    createdAt: Joi.date().optional(),
    updatedAt: Joi.date().optional(),
});

export default InterviewRoadMapValidationSchema;
