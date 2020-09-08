import Joi from 'joi';

const RegistrationSchema = Joi.object({
    firstName: Joi.string()
        .min(2)
        .max(40),
    email: Joi.string()
        .email()
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
    confirmPassword: Joi.ref('password')
})

const LoginSchema = Joi.object({
    email: Joi.string()
        .email()
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required()
})

export const validateRegistrationData = (data : any) => {
    let {error , value} = RegistrationSchema.validate(data);
    return {err : error, value }
}
export const validateLoginData = (data : any) => {
    let {error , value} = LoginSchema.validate(data);
    return {err : error, value }
}