const log = console.log;
import path from "path";
import ora from "ora";
import chalk from "chalk";
import * as tkr from "tacker";

import * as rg from "repo-genesis-lib";
import meow from "meow";

// (async () => {
//   const spinner = ora("Cloning repositories");
//   spinner.color = "blue";
//   let config = await rg.parse();
//   spinner.text = "Cloning repositories from git";
//   spinner.start();
//   await rg.genAll(config);
//   spinner.stop();
// })();

let helpMenu = `${tkr.printLine("blue")}
Usage
  $ repogen <command>

Commands
  * repogen ${chalk.cyan("help")}
`;
const cli = meow(helpMenu, {});

async function init() {
  const spinner = ora("Cloning repositories");
  spinner.color = "blue";
  try {
    let config = await rg.parse();
    spinner.text = "Cloning repositories from git";
    spinner.start();
    await rg.genAll(config);
    spinner.succeed();
  } catch (err) {
    return tkr.printError(true, { fn: "init", err });
  }
}

init();
