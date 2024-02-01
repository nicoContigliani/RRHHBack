import Joi from 'joi';

const VacancyValidationSchema = Joi.object({
    title: Joi.string().required(),
    description:Joi.string(),
    requirements: Joi.string().required(),
    responsibilities: Joi.string().required(),
    status_vacancy: Joi.boolean().required(),
    status_vacancy_work: Joi.string(),
    start_vacancy: Joi.string(),
    finish_vacancy: Joi.string(),
    TypeVacancyId: Joi.number().integer().required(),
    extra_data: Joi.string(),
    location: Joi.string()
});

export default VacancyValidationSchema;

