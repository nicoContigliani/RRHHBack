import Joi from 'joi';

const LenguajeValidationSchema = Joi.object({
name: Joi.string().required(),status_Lenguaje: Joi.boolean().required(),initial_value_Lenguaje: Joi.number().integer().required(),
});

export default LenguajeValidationSchema;

