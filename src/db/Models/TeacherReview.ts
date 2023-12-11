import { DataTypes, Model } from "sequelize";
import driver from "../driver";

class TeacherReview extends Model {
  declare id: number;
  declare title: string;
  declare body: string;
  declare rating: number;
  declare upvote: number;
  declare downvote: number;
}

TeacherReview.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    defaultValue: 5,
    validate: {
      min: 0,
      max: 5
    }
  },
  upvote: {
    type: DataTypes.BIGINT,
    defaultValue: 0
  },
  downvote: {
    type: DataTypes.BIGINT,
    defaultValue: 0
  }
}, { sequelize: driver })

export default TeacherReview;