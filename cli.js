#!/usr/bin/env node

const log = console.log;
const meow = require("meow");
const chalk = require("chalk");
const path = require("path");
const { init } = require("repo-genesis");

let c = meow(
  `
    Usage
        $ repo <input>

      Options
        --config, -c ./path/to/my/config
        --sample, -s Print sample config

      Examples
        $ repo -c ~/my-config.js
        $ repo -s 
`,
  {
    flags: {
      config: {
        type: "string",
        alias: "c"
      }
    }
  }
);

async function parse(config) {
  try {
    await init(config);
  } catch (err) {
    log(`Failed to parse config \n ${chalk.red(err)}`);
  }
}

if (c.flags.hasOwnProperty("config")) {
  let where = path.join(process.cwd(), c.flags.config);
  let { config } = require(where);
  parse(config);
} else {
  log(`Please pass ${chalk.magenta("-c")} property`);
}
