import test from "ava";
const log = console.log;
const fs = require("fs");
const path = require("path");

test("CLI has execution permission", t => {
  const cli = path.join(__dirname, "../cli.js");
  let mod = fs.chmod(cli, 777, err => err);
  t.is(mod, undefined);
});

test("bar", async t => {
  const bar = Promise.resolve("bar");

  t.is(await bar, "bar");
});
