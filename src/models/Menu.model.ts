import { sequelize } from "../utils/db.util";
import { DataTypes, Model } from "sequelize";

class Menu extends Model {}

Menu.init(
  {
    startTime: {
      type: DataTypes.DATE,
    },
    wasHeld: {
      type: DataTypes.BOOLEAN,
    },
    endTime: {
      type: DataTypes.DATE,
    },
    lastSeen: {
      type: DataTypes.DATE,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isDeleted : {
      type: DataTypes.BOOLEAN,
      defaultValue :false
    }
  },
  {
    sequelize,
    tableName : "menus",
    modelName: "Menu",
  }
);
