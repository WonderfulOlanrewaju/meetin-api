import { User } from '../../models/User.model';
import bcrypt from 'bcryptjs';

interface userDetails {
    password : string,
    email : string,
}

export const createUser = async (userDetails :  userDetails) => {
    try {
        let passwordSalt = bcrypt.genSaltSync(10);
        let passwordHash = bcrypt.hashSync(userDetails.password, passwordSalt);
        userDetails.password = passwordHash;
        let user : any = await User.build(userDetails);
        return user;
    } catch (err) {
        return err;
    }
}