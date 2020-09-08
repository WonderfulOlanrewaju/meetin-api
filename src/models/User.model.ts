import { sequelize } from '../utils/db.util';
import { DataTypes, Model } from "sequelize";

interface User {
    firstName : string;
    isActive: string;
    lastName : string;
    password:string;
    email: string,
    id : number;
}
class User extends Model {
    static getTableInfo  () {
        return 'This table saves user details'
    }
    getFullName () {
        return [this.firstName , this.lastName].join(' ')
    }
};

User.init({
    firstName: {
        type :DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password : {
        type: DataTypes.STRING
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, 
{
    sequelize,
    timestamps : true,
    createdAt : "joined",
    updatedAt : "lastSeen",
    tableName : 'users',
    modelName : "User"
})

export {User}