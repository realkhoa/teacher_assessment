import { Sequelize } from "sequelize";

import config from "../utils/credentials";
import log from "../utils/logging";

const driver = new Sequelize(
  `postgres://${config.databaseUser}:${config.databasePassword}@${config.databaseHost}:${config.databasePort}/postgres`
);

async function migrate() {
  driver.getQueryInterface().createDatabase(config.database)
    .then((res) => log("info", "Created new database"))
    .catch((e) => {
      log("error", e)
    })
}

migrate();
