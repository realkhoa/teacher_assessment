import University from "@app/db/Models/University";
import IUniversity from "@app/types/IUniversity";
import IPostUniversityParams from "@app/types/params/IPostUniversityParams";

export async function create(u: IPostUniversityParams): Promise<IUniversity> {
  const newUniversity = University.build({...u});

  await newUniversity.save();
  return newUniversity;
} 

export async function getByID(id: string): Promise<IUniversity> {
  const university = await University.findOne({ where: { id }});

  return university as IUniversity;
} 