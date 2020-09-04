import { sequelize } from "../utils/db.util";
import { DataTypes, Model } from "sequelize";

class Meeting extends Model {}

Meeting.init(
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
    tableName : "meetings",
    modelName: "Meeting",
  }
);
