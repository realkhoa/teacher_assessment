import Teacher from "./Teacher";
import TeacherReview from "./TeacherReview";
import University from "./University";
import User from "./User";

// Relationship
Teacher.belongsTo(University, {
  onDelete: "CASCADE",
  foreignKey: "universityID",
})
University.hasMany(Teacher, {
  onDelete: "CASCADE",
  foreignKey: "universityID",
})

Teacher.hasMany(TeacherReview, {
  onDelete: "CASCADE",
  foreignKey: "teacherID",
})
TeacherReview.belongsTo(Teacher, {
  onDelete: "CASCADE",
  foreignKey: "teacherID",
})

export {
  User,
  University,
  Teacher,
  TeacherReview
}