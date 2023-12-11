import { Model } from "sequelize";
import * as models from "./Models";

async function migrate() {
  for (const [key, mod] of Object.entries(models)) {
    await mod.sync({ alter: true })
  }
}

migrate()