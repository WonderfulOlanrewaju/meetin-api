import { sequelize } from '../utils/db.util';
import { DataTypes, Model } from "sequelize";

interface User {
    fullName : string;
    isActive: string;
    lastName : string;
    password:string;
    email: string,
    phone: string;
    id : number;
    isAdmin: Boolean,
    [propName: string] : any
}
class User extends Model {
    static getTableInfo  () {
        return 'This table saves user details'
    }
};

User.init({
    fullName: {
        type :DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique : true,
        allowNull: false
    },
    phone : {
        type: DataTypes.STRING
    },
    password : {
        type: DataTypes.STRING
    },
    isActivated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    isApproved : {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    userType: {
        type: DataTypes.ENUM({ values : [
            'super', 
            'administrator',
            'moderator', 
            'cashier',
            'normal',
            'enterprise',
            'brand',
            'staff'
        ]}),
        defaultValue :'normal'
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

