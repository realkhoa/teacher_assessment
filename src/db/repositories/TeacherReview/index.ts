import { Teacher, TeacherReview } from "@app/db/Models";
import ITeacherReview from "@app/types/ITeacherReview";
import IPostTeacherReviewParams from "@app/types/params/IPostTeacherReviewParams";
import log from "@app/utils/logging";

export async function create(tr: IPostTeacherReviewParams): Promise<ITeacherReview> {
  log("debug", tr)
  const newReview = TeacherReview.build({...tr}, {
    include: Teacher
  });

  await newReview.save();
  return newReview;
} 

export async function getByID(id: string): Promise<ITeacherReview> {
  const existed = await TeacherReview.findOne({ where: { id } })

  return existed as ITeacherReview;
}