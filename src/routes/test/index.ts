import { Router, Request, Response } from "express";

const route = Router();

route.all("/", (req: Request, res: Response) => {
  res.status(200).json({
    data: "OK",
    error: null
  })
})

export default route;