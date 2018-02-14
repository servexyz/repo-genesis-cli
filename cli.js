#!/usr/bin/env node

const log = console.log;
const meow = require("meow");
const chalk = require("chalk");

const pretty = (input, flags) => {
  log(`input: ${input} \n ${flags}`);
};
let c = meow(
  `
    Usage
        $ respace <input>

      Options
        --config, -c  Generate repospace from config

      Examples
        $ respace -config my-config.js
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

pretty(c.input[0], c.flags);
