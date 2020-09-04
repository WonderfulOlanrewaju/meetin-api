import { sequelize } from './../utils/db.utils';
import { DataTypes, Model } from "sequelize";

class User extends Model {};

User.init({
    firstName: {
        type :DataTypes.STRING,
        allowNull : false
    },
    lastName: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING
    },
    password : {
        type: DataTypes.STRING
    },
    joined : {
        type :DataTypes.DATE,
        defaultValue: Date.now
    },
    lastSeen : {
        type :DataTypes.DATE
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, 
{
    sequelize,
    modelName : "User"
})

