import chalk from "chalk";
import { ILoggingType } from "@app/types/ILoggingType";

// export function log(type: ILoggingType, msg: any) {
//   let data = "";
//   msg = JSON.stringify(msg)
//   switch(type) {
//     case "error": data += chalk.bgRed.white.bold("ERR ") + " " + chalk.red(msg); break;
//     case "info": data += chalk.bgGreen.white.bold("INFO") + " " + chalk.green(msg); break;
//     case "warning": data += chalk.bgYellow.white.bold("WARN") + " " + chalk.yellow(msg); break;
//     case "debug": data += chalk.bgCyan.white.bold("DEBUG") + " " + chalk.cyan(msg); break;
//   }

//   console.log(data)
// }

export function log(type: ILoggingType, msg: any) {
  switch(type) {
    case "error": console.log(chalk.bgRed.white.bold("ERR ")); break;
    case "info": console.log(chalk.bgGreen.white.bold("INFO")); break;
    case "warning": console.log(chalk.bgYellow.white.bold("WARN")); break;
    case "debug": console.log(chalk.bgCyan.white.bold("DEBUG")); break;
  }

  console.log(msg)
}

export default log;