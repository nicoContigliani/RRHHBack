import Joi from 'joi';

const TypeVacancyValidationSchema = Joi.object({
name_vacancy_type: Joi.string().required(),description_vacancy_type: Joi.string().required(),status_vacancy_type: Joi.boolean().required(),
});

export default TypeVacancyValidationSchema;

