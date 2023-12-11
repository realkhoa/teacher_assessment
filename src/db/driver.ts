import { Sequelize } from "sequelize";
import chalk from "chalk";

import config from "../utils/credentials";
import log from "../utils/logging";

const driver = new Sequelize(
  `postgres://${config.databaseUser}:${config.databasePassword}@${config.databaseHost}:${config.databasePort}/${config.database}`,
  {
    logging: (...msg) => config.environment === "dev" ? log("info", msg) : false,
  }
);

export default driver;