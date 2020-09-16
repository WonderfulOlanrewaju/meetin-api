import { handleResError } from './../../utils/err.util';
import { handleResSuccess } from './../../utils/success.util';
import express from 'express';
import {User} from '../../models/User.model';

interface err {
    message : String
}

export const FetchAllEnterpriseWaitingApproval = async (req : express.Request , res: express.Response) => {
    try {
        let users = await User.findAll({
            where : {
                isApproved : false
            }
        })
        console.log(users)
        handleResSuccess( 
                res, 
                "Here are users pending approval", 
                users, 
                201
            )
    } catch (err) {
        handleResError(res, err , 400)
    }
}