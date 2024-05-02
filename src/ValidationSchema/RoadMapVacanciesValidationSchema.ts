import Joi from 'joi';

const RoadMapValidationSchema = Joi.object({
    VacancyId: Joi.number().integer().required(), RoadMapId: Joi.number().integer().required(), status_RoadMapVacance: Joi.boolean().required(), comments: Joi.string().required(), statusProgres: Joi.string().required()
});

export default RoadMapValidationSchema;

