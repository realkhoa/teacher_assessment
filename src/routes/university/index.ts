import { Router, Request, Response } from "express";

import * as universityRepositories from "@app/db/repositories/University"
import log from "@app/utils/logging";
import IUniversity from "@app/types/IUniversity";
import IPostUniversityParams from "@app/types/params/IPostUniversityParams";

const route = Router();

route.post("/", (req: Request, res: Response) => {
  const u: IPostUniversityParams = req.body;

  universityRepositories.create(u)
    .then((created: IUniversity) => {
      res.status(200).json(created);
    })
    .catch((e) => {
      res.status(400).json(e);
      log("error", e);
    });
});

route.get("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  universityRepositories
    .getByID(id)
    .then((university: IUniversity) => {
      if (!university) return res.status(404).json(university);
      res.status(200).json(university);
    })
    .catch((e) => {
      res.status(400).json(e);
      log("error", e);
    });
});

export default route;