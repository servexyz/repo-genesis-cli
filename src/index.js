#!usr/bin/env node

const log = console.log;
import path from "path";
import ora from "ora";
import * as tkr from "tacker";

import * as rg from "repo-genesis-lib";
import meow from "meow";

(async () => {
  const spinner = ora("Cloning repositories");
  let config = await rg.parse();
  spinner.start();
  await rg.genAll(config);
  spinner.stop();
})();
