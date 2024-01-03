import Joi from 'joi';

const LocationValidationSchema = Joi.object({
name_Location: Joi.string().required(),country: Joi.string().required(),timezone: Joi.string().required(),status_Location: Joi.boolean().required(),initial_value_Location: Joi.number().integer().required(),
});

export default LocationValidationSchema;

