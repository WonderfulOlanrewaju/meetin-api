import { RegisterUserController } from './../controllers/majors/auth.controller';
import express from  'express';
export const router = express.Router();

router.route('/register')
    .post(RegisterUserController)

    