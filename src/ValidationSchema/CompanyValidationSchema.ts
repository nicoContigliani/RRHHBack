import Joi from 'joi';

const CompanyValidationSchema = Joi.object({
company: Joi.string().required(),companyPhone: Joi.string().required(),companyEmail: Joi.string().required(),urlCompany: Joi.string().required(),status_company: Joi.boolean().required(),
});

export default CompanyValidationSchema;

