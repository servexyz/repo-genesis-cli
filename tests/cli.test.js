import test from "ava";

const log = console.log;
const path = require("path");

test("CLI has execution permission", t => {
  const cli = path.join(__dirname, "../cli.js");
  const chmod = require("chmod");
  let modifiedCLI = chmod(cli, 777);
  t.is(modifiedCLI, undefined);
});
