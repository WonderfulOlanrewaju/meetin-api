import dotenv from 'dotenv';
import { Sequelize } from "sequelize";
dotenv.config();

interface sequelize {
  authenticate : Function,
  close : Function
}

const { DevDB, DBUser, host } = process.env;

export const sequelize = new Sequelize(DevDB, DBUser, null, {
  host,
  dialect: "mysql",
});

export const createConnection = async (sequelize: sequelize) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } 
};