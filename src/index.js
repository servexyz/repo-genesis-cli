#!usr/bin/env node

const log = console.log;
import path from "path";

import * as rg from "repo-genesis-lib";
import meow from "meow";

(async () => {
  await rg.parse();
})();
