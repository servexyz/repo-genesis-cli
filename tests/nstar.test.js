import execa from "execa";
import test from "ava";
import path from "path";

const expectedLog = "Hello from node-starter!";
test("src/index.js :: successfully logs", async t => {
  let scriptPath = path.join(process.cwd(), "src", "index.js");
  let { stdout } = await execa("node", [scriptPath]).catch(e => {
    throw new Error(e);
  });
  t.is(stdout, expectedLog);
});
test("build/main.js :: successfully logs", async t => {
  let scriptPath = path.join(process.cwd(), "build", "main.js");
  try {
    // * Cannot build (like below) or infinite recursion occurs
    // ? await execa("npm", ["run", "build"]);
    // * Note: this only occurs when `test:liveReloadAva` script is the target test script
    let { stdout } = await execa("node", [scriptPath]).catch(e => {
      throw new Error(e);
    });
    t.is(stdout, expectedLog);
  } catch (err) {
    throw new Error(err);
  }
});
