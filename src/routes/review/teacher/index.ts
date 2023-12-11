import { Router, Request, Response } from "express";

import * as teacherReviewRepository from "@app/db/repositories/TeacherReview"
import ITeacherReview from "@app/types/ITeacherReview";
import log from "@app/utils/logging";
import IPostTeacherReviewParams from "@app/types/params/IPostTeacherReviewParams";
import verifyCaptchaToken from "@app/middlewares/verifyCaptchaToken";

const route = Router();

route.post("/", verifyCaptchaToken, (req: Request, res: Response) => {
  const tr: IPostTeacherReviewParams = req.body;
  const teacherID = req.body.teacherID;

  teacherReviewRepository.create(tr)
    .then((created: ITeacherReview) => {
      res.status(200).json(created);
    })
    .catch((e) => {
      res.status(400).json(e);
      log("error", e);
    });
});

export default route;