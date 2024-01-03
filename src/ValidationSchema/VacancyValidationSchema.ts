import Joi from 'joi';

const VacancyValidationSchema = Joi.object({
title: Joi.string().required(),requirements: Joi.string().required(),responsibilities: Joi.string().required(),status_vacancy: Joi.boolean().required(),TypeVacancyId: Joi.number().integer().required(),
});

export default VacancyValidationSchema;

