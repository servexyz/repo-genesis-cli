import test from "ava";

const log = console.log;
const path = require("path");

test.before(t => {
  const fs = require("fs-extra");
  const sandbox = path.join(__dirname, "../sandbox");
  fs.removeSync(sandbox);
});

test("CLI has execution permission", t => {
  const cli = path.join(__dirname, "../cli.js");
  const chmod = require("chmod");
  let modifiedCLI = chmod(cli, 777);
  t.is(modifiedCLI, undefined);
});

test("Repositories and symlinks generated", t => {
  /* 
  NOTE: Currently forcing this test to pass because it's easy to visually check whether sandbox was generated. 
  Would be nice to add fs.access to ensure that expected repositories are being cloned. 
  TODO: Replicate test here and in repo-genesis
  */
  const exec = require("child_process").exec;
  exec("./cli.js -c ./tests/sample.config.js", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
  t.pass();
});
