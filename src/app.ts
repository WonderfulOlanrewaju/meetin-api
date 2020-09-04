import { createConnection, sequelize } from './utils/db.utils';
import dotenv from 'dotenv';
import cors from 'cors';
import SwaggerUI from 'swagger-ui-express';
import SwaggerDocument from './swagger.json';
import express from 'express';
// import swaggerJSDoc from "swagger-jsdoc";
export const app = express();
dotenv.config();

createConnection(sequelize);

app.use("/api-doc", SwaggerUI.serve, SwaggerUI.setup(SwaggerDocument));

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
);

app.options("*", cors());

app.get('/', (req, res)=> {
    res.status(200).json({
        message: "It's time for Meetin API"
    });
});