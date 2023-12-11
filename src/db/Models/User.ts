import { DataTypes, Model } from "sequelize";

import driver from "../driver";

class User extends Model {
  declare id: number;
  declare firstName: string;
  declare lastName: string;
  declare username: string;
  declare password: string;
}

User.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { sequelize: driver, indexes: [{ fields: ["username"], unique: true }] }
);

export default User;
