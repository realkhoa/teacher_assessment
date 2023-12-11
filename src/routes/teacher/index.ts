import ITeacher from "@app/types/ITeacher";
import { Router, Request, Response } from "express";

import * as teacherRepository from "@app/db/repositories/Teacher";
import log from "@app/utils/logging";
import IPostTeacherParams from "@app/types/params/IPostTeacherParams";
import verifyCaptchaToken from "@app/middlewares/verifyCaptchaToken";

const route = Router();

route.post("/", (req: Request, res: Response) => {
  const t: IPostTeacherParams = req.body;

  teacherRepository
    .create(t)
    .then((created: ITeacher) => {
      res.status(200).json(created);
    })
    .catch((e) => {
      res.status(400).json(e);
      log("error", e);
    });
});

route.get("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  teacherRepository
    .getByID(id)
    .then((teacher: ITeacher) => {
      if (!teacher) return res.status(404).json(teacher);
      res.status(200).json(teacher);
    })
    .catch((e) => {
      res.status(400).json(e);
      log("error", e);
    });
});

export default route;
