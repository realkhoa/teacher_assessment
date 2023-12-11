import { Request, Response, NextFunction } from "express";
import verify from "@app/captcha/verify";
import log from "@app/utils/logging";

export default function verifyCaptchaToken(req: Request, res: Response, next: NextFunction) {
  const token = req.params["data-hcaptcha-response"] || req.headers["data-hcaptcha-response"] || req.body["data-hcaptcha-response"];

  verify(token)
    .then(() => next())
    .catch((e) => {
      log("error", e)
      res.status(500).json(e)
    })
}