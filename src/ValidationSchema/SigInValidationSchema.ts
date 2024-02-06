import Joi from 'joi';

const SigInValidationSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(), 
    fullname: Joi.string().required(), 
    phone: Joi.string().required(), 
    birthday: Joi.string(), 
    Score: Joi.number().integer(),
    status_user: Joi.boolean().required(),
});

export default SigInValidationSchema;

