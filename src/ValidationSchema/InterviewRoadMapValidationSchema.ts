import Joi from 'joi';

const InterviewRoadMapValidationSchema = Joi.object({
InterviewId: Joi.number().integer().required(),RoadMapId: Joi.number().integer().required(),status_InterviewRoadMap: Joi.boolean().required(),statusProgres: Joi.string().required(),
});

export default InterviewRoadMapValidationSchema;

