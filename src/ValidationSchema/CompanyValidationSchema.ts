import Joi from 'joi';

const CompanyValidationSchema = Joi.object({
    id: Joi.number(), company: Joi.string().required(), companyPhone: Joi.string().required(),
    companyEmail: Joi.string().required(),
    urlCompany: Joi.string().required(),
    status_company: Joi.boolean().required(), updatedAt: Joi.string(), createdAt: Joi.string()
});

export default CompanyValidationSchema;

