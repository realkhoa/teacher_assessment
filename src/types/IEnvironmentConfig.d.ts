export type IEnvironment = "dev" | "prod";

export default interface IEnvironmentConfig {
  database: string
  databasePort: number
  databaseHost: string
  databaseUser: string
  databasePassword: string
  environment: IEnvironment
  applicationPort: string
  hcaptchaSecret: string
  hcaptchaSitekey: string
}