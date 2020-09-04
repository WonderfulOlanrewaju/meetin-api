import dotenv from 'dotenv';
import { Sequelize } from "sequelize";
dotenv.config();

interface sequelize {
  authenticate : Function,
  close : Function,
  sync : Function
}

const { 
    DevDB, DBUser, host,
    DB_Database, DB_Password, 
    DB_Host, DB_Username
 } = process.env;

export const sequelize = new Sequelize(
  DB_Database || DevDB,
  DB_Username || DBUser,
  DB_Password || null,
  {
    host: DB_Host || host,
    dialect: "mysql",
  }
);

export const createConnection = async (sequelize: sequelize) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } finally {
    await sequelize.sync({
      alter : true
    })
    console.log('All tables were successfully updated!')
  }
};