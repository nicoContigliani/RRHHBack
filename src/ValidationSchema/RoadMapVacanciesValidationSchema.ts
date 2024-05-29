import Joi from 'joi';

const RoadMapValidationSchema = Joi.object({
    VacancyId: Joi.number().integer().required(), 
    RoadMapId: Joi.number().integer().required(), 
    status_RoadMapVacance: Joi.boolean().optional(), 
    comments: Joi.string().optional(), 
    statusProgres: Joi.string().optional(),
    createdAt: Joi.date().optional(),
    updatedAt: Joi.date().optional(),
});

export default RoadMapValidationSchema;

     