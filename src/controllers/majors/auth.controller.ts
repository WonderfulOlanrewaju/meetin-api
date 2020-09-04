import { createUser } from './../utils/auth.util';
import { validateRegistrationData } from './../../validators/auth.validator';
import { handleResError } from './../../utils/err.util';
interface req {
    body : Object,
    decoded :Object
}

interface res {
    status : Function,
}

interface err {
    message : String
}

export const RegisterUserController =  async (req : req , res : res) => {
    let {err, value } = validateRegistrationData (req.body);
    if (err) handleResError(res, err, 400)
    else {
        let user = await createUser(value);
    }
}