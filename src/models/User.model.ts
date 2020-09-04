import { sequelize } from './../utils/db.utils';
import { DataTypes, Model } from "sequelize";

class User extends Model {

};

User.init({
    firstName: {
        type :DataTypes.STRING,
        allowNull : false
    },
    lastName: {
        type: DataTypes.STRING,
    }
}, 
{
    sequelize,
    modelName : "User"
})

