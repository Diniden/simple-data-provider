const shell = require('shelljs');
const path = require('path');
const prettier = require('prettier');
const glob = require('glob');
const fs = require('fs-extra');
const commander = require('commander');

const { Command } = commander;
const program = new Command();
const options = {};

program.version('0.0.1');
program.option(
  '-p, --pattern [param]',
  `
    Provides a pattern for certain operations to utilize. This is primarily
    used by unit tests to filter tests to specified tests.
  `
);

program.parse(process.argv);
options.pattern = program.pattern;

/**
 * The prettier CLI is giving us issues with running using shelljs, so we will
 * manually run prettier across all ts files in the unit test folder
 */
async function runPrettier() {
  let resolve;
  const p = new Promise(r => (resolve = r));

  glob(path.resolve('unit-test', '**', '*.ts'), async (err, matches = []) => {
    if (err) {
      console.warn(err);
      return;
    }

    const promises = matches.map(async fileName => {
      try {
        const source = fs.readFileSync(fileName, { encoding: 'utf8' });
        const config = Object.assign(
          {},
          await prettier.resolveConfig(fileName),
          { parser: 'typescript' }
        );
        const pretty = prettier.format(source, config);

        if (pretty !== source) {
          try {
            fs.writeFileSync(fileName, pretty);
          }
          catch (error) {
            console.warn(error);
          }
        }
      } catch (error) {
        console.warn("Could not run prettier for", fileName);
        console.warn(error?.stack || error?.message)
      }
    });

    await Promise.all(promises);
    resolve();
  });

  await p;
}

async function run() {
  // See if we are running the unit tests with the need to attach a debug console
  const debug = Boolean(process.env.DEBUG_UNIT_TEST);
  // Run prettier once
  await runPrettier();
  // Run mocha once
  const bootstrapPath = path.resolve(__dirname, './test-bootstrap.js');
  const jsdom = path.resolve("./node_modules/jsdom-global/register.js");
  console.log("Looking for JSDom:", jsdom);
  console.log("JSDom available:", fs.existsSync(jsdom));
  shell.exec(`mocha ${fs.existsSync(jsdom) ? `-r ${jsdom}` : ""} ${debug ? '--inspect-brk' : ''} ${options.pattern ? `-g ${options.pattern}` : ''} --file ${bootstrapPath} --recursive --color \"unit-test/**/*.ts\"`);
}

run();
