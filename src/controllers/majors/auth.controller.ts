import JWT from 'jsonwebtoken';
import { handleResSuccess } from './../../utils/success.util';
import { createUser, loginUser } from './../utils/auth.util';
import { 
    validateRegistrationData,
    validateLoginData
 } from './../../validators/auth.validator';
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

interface userInterface {
    id: String;
    email: String;
    isActive:Boolean;
    [propName: string]: any;
}

interface userCreated extends userInterface {
    err : err;
}

export const RegisterUserController =  async (req : req , res : res) => {
    try {
        let { err, value } = validateRegistrationData(req.body);
        if (err) handleResError(res, err.details[0], 400)
        else {
            let { err, user } = await createUser(value) as userCreated;
            if (err) handleResError(res, err, 400)
            else {
                console.log(user);
                let { id, email, isActive }: userInterface = user;
                let options = {
                    expiresIn: "12h",
                    issuer: "meetin-hasher"
                }
                let token = await JWT.sign({ id, email, isActive }, secretKey, options);
                handleResSuccess(
                    res,
                    `Account successfully registered`,
                    {token},
                    201
                )
            }
        }
    } catch (e) {
        handleResError(res, e, 400)
    }
}

export const LoginUserController = async (req :  req, res:  req) => {
    try {
        let {err, value} = validateLoginData(req.body);
        if (err) handleResError (res, err.details[0], 400);
        else {
            let { err, token } = await loginUser(value);
            if(err) handleResError(res, err, 400)
            else handleResSuccess(
                    res, 
                    "login successful",
                    {token},
                    201
                )
        }
    } catch (e){
        handleResError(res, e, 400)
    }
}