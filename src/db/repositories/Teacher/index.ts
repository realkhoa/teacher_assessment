import Teacher from "@app/db/Models/Teacher";
import ITeacher from "@app/types/ITeacher";
import IPostTeacherParams from "@app/types/params/IPostTeacherParams";
import log from "@app/utils/logging";

export async function create(t: IPostTeacherParams): Promise<ITeacher> {
  const newTeacher = Teacher.build({...t});

  await newTeacher.save();
  return newTeacher;
} 

export async function getByID(id: string): Promise<ITeacher> {
  const existed = await Teacher.findOne({ where: { id } })

  return existed as ITeacher;
}

export async function getByName(name: string): Promise<ITeacher> {
  const existed = await Teacher.findOne({ where: { name } })

  return existed as ITeacher;
}