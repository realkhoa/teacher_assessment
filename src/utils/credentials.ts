import IEnvironmentConfig, { IEnvironment } from "@app/types/IEnvironmentConfig";
import dotenv from "dotenv"

dotenv.config();

const config: IEnvironmentConfig = {
  database: process.env.DATABASE!,
  databaseHost: process.env.DATABASE_HOST!,
  databasePassword: process.env.DATABASE_PASSWORD!,
  databasePort: parseInt(process.env.DATABASE_PORT!, 10),
  databaseUser: process.env.DATABASE_USER!,
  environment: process.env.ENVIRONMENT! as IEnvironment,
  applicationPort: process.env.APPLICATION_PORT!,
  hcaptchaSecret: process.env.H_CAPTCHA_SECRET!,
  hcaptchaSitekey: process.env.H_CAPTCHA_SITEKEY!
}

if(process.env.ENVIRONMENT === "dev") {
  config.database += "_dev"
}

if(process.env.ENVIRONMENT === "prod") {
  config.database += "_production"
}

export default config;