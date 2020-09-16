import bcrypt  from 'bcryptjs';
import { createConnection, sequelize } from './utils/db.util';
import dotenv from 'dotenv';
import cors from 'cors';
import SwaggerUI from 'swagger-ui-express';
import SwaggerDocument from './swagger.json';
import express from 'express';
import {router as AuthControllers} from './routes/auth.route';
import { name } from "../package.json";
import swaggerJSDoc from "swagger-jsdoc";
import {User} from './models/User.model'
export const app = express();
dotenv.config();

createConnection(sequelize);

// const swaggerDocs = swaggerJSDoc(SwaggerDocument)

// app.use("/api-doc", SwaggerUI.serve, SwaggerUI.setup(swaggerDocs));
app.use("/api-doc", SwaggerUI.serve, SwaggerUI.setup(SwaggerDocument));

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
);

app.options("*", cors());

const seedSuperAdmin = async () => {
 let superAdmin = await User.findOne({
   where : {
     isAdmin: true,
     email: "superadmin@gmail.com"
    }
 });
 if (!superAdmin || superAdmin === null) {
   let pwSalt = await bcrypt.genSaltSync(10);
   let pwHash = await bcrypt.hashSync(process.env.SuperAdminPW, pwSalt);
   let seededAdmin: any = await User.create({
     isAdmin: true,
     isActivated: true,
     userType: "super",
     fullName: "Super Admin",
     password: pwHash,
     email: "superadmin@godark-api.com",
   });
   console.log("Super Admin created with email" + seededAdmin.toJSON().email);
 } 
}

seedSuperAdmin();

app.get('/', (req, res)=> {
    res.status(200).json({
        message: `${name} api`
    });
});

app.use('/api/v1/auth/', AuthControllers);