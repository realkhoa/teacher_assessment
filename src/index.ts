import "tsconfig-paths/register"
import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import chalk from "chalk";

import config from "@app/utils/credentials";

import test from "@app/routes/test";
import teacher from "@app/routes/teacher";
import university from "@app/routes/university";
import teacherReview from "@app/routes/review/teacher";

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/test", test);
app.use("/", test);
app.use("/teachers", teacher);
app.use("/universities", university);
app.use("/reviews/teacher", teacherReview);


app.listen(config.applicationPort, () => {
  console.log(`
  App running at ${chalk.green(`http://127.0.0.1:${config.applicationPort}`)}\n
  Expose at ${chalk.yellow(`0.0.0.0:${config.applicationPort}`)}
  `)
})