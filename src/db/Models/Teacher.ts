import { DataTypes, Model } from "sequelize";

import driver from "../driver";

class Teacher extends Model {
  declare id: number;
  declare name: string;
  declare thumbnail: string;
  declare description: string;
}

Teacher.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  { sequelize: driver }
);

export default Teacher;