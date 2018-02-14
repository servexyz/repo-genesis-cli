import test from "ava";

const log = console.log;
const path = require("path");

const cli = path.join(__dirname, "../cli.js");

log(`Cli: ${cli}`);
test("CLI has execution permission", t => {
  const chmod = require("chmod");
  let modifiedFile = chmod(cli, 777);
  t.is(modifiedFile, undefined);
});
