#!/usr/bin/env node

const log = console.log;
const meow = require("meow");
const chalk = require("chalk");

const pretty = (input, flags) => {
  log(
    `input: ${JSON.stringify(input, null, 2)} \n flags: ${JSON.stringify(
      flags,
      null,
      2
    )}`
  );
};

let c = meow(
  `
    Usage
        $ repo <input>

      Options
        --path, -p ./path/to/my/cloned/repos (Default: process.cwd())
        --config, -c ./path/to/my/config
        --sample, -s Print sample config

      Examples
        $ repo -c ~/my-config.js
        $ repo -p ~/target/directory -c ~/my-config.js
        $ repo -s 
`,
  {
    flags: {
      path: {
        type: "string",
        alias: "p",
        default: process.cwd()
      },
      config: {
        type: "string",
        alias: "c"
      },
      sample: {
        alias: "s"
      }
    }
  }
);

pretty(c.input[0], c.flags);
