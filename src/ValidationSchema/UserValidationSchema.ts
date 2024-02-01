import Joi from 'joi';

const UserValidationSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(), fullname: Joi.string().required(), phone: Joi.string().required(), birthday: Joi.string().required(), Score: Joi.number().integer().required(),
    status_user: Joi.boolean().required(),
});

export default UserValidationSchema;

