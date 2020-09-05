import { JWT } from 'jsonwebtoken';
import { handleResSuccess } from './../../utils/success.util';
import { createUser } from './../utils/auth.util';
import { validateRegistrationData } from './../../validators/auth.validator';
import { handleResError } from './../../utils/err.util';
import dotenv from 'dotenv';
dotenv.config();
let {secretKey} = process.env;
interface req {
    body : Object,
    [propName: string]: any
}

interface res {
    status : Function,
}

interface err {
    message : String
}

export const RegisterUserController =  async (req : req , res : res) => {
    let {err, value } = validateRegistrationData (req.body);
    if (err) handleResError(res, err.details[0], 400)
    else {
        let {err, user} = await createUser(value);

        if(err) handleResError (res, err, 400)
        else {
            let { id, email, isActive } = user;
            let options = {
                expiresIn: "12h",
                issuer: "meetin-hasher"
            }
            let token = await JWT.sign({id, email, isActive}, secretKey, options);
            handleResSuccess(
                res, 
                `Account successfully registered`, 
                token, 
                201
            )
        }
    }
}