import { 
    RegisterUserController,
    LoginUserController 
} from './../controllers/majors/auth.controller';
import express from  'express';
export const router = express.Router();

router.route('/register')
    .post(RegisterUserController)

router.route('/login')
    .post(LoginUserController)

    