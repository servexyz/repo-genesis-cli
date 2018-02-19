#!/usr/bin/env node

const log = console.log;
const meow = require("meow");
const chalk = require("chalk");
const path = require("path");
const { init } = require("repo-genesis");

let c = meow(
  `
    Usage
        $ repogen <input>

      Examples
        $ repogen /relative/path/to/my/config.js
`
);

async function parse(config) {
  try {
    await init(config);
  } catch (err) {
    log(`Failed to parse config \n ${chalk.red(err)}`);
  }
}

if (c.input.length === 1) {
  let { config } = require(path.join(process.cwd(), c.input[0]));
  parse(config);
} else {
  log(
    `Please pass the path to your configuration. Example: \n 
    ${chalk.green("repogen")} ${chalk.blue("/relative/path/to/my/config.js")}`
  );
}
