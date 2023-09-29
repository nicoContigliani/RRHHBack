import Joi from 'joi';

const CompanyVacancesValidationSchema = Joi.object({
VacancyId: Joi.number().integer().required(),CompanyId: Joi.number().integer().required(),UserId: Joi.number().integer().required(),status_company_vacances: Joi.boolean().required(),
});

export default CompanyVacancesValidationSchema;

