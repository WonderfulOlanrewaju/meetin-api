import { handleResError } from './../../utils/err.util';
import { User } from '../../models/User.model';
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';

interface userDetails {
    password : string,
    email : string,
}

export const createUser = async (userDetails :  userDetails) => {
    try {
        let foundExistingUser = await User.findOne({
          where: {
            email: userDetails.email,
          }
        });
        let err;
        let user;
        if(foundExistingUser && foundExistingUser !==null) {
            err = {
                    message : "account already exist. Login instead!"
                }
            return {err, user}
        } else {
            let passwordSalt = bcrypt.genSaltSync(10);
            let passwordHash = bcrypt.hashSync(userDetails.password, passwordSalt);
            userDetails.password = passwordHash;
            let registeredUser = await User.create(userDetails);
            user = registeredUser.toJSON();
            return {err , user};
        }
    } catch (err) {
        console.log(err);
        return {err};
    }
}

export const loginUser = async (loginDetails : userDetails) => {
    try {
        let foundExistingUser = await User.findOne({
            where : {
                email : loginDetails.email
            } 
        });
        if (foundExistingUser){

        } else if (foundExistingUser === null) {
            let err  = { message : "User does not exist. Signup instead!"}
            return {err}
        }
    } catch (err) {
        return {err}
    }
}