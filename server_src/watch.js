// Needed modules for building system
var fs = require('fs-extra');
var path = require('path');
var exec = require('child_process').exec;
var rimrafSync = require('rimraf').sync;
var chalk = require('chalk');

// init path directory
var appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

// Init path
var survivalGarriguesPackage = resolveApp('../../packages/survival_garrigues');
var serverSrc                = resolveApp('./src');
var serverSrcPackageJson     = resolveApp('./src/package.json');

// Clean package survival directory
console.log(chalk.red('Clear target directory...'));
rimrafSync(survivalGarriguesPackage + '/*');

// Copy the package.json file
console.log(chalk.green('Copy package.json file...'));
fs.copySync(serverSrcPackageJson, survivalGarriguesPackage + '/package.json' );

// Download needed packages
console.log(chalk.magenta('Install Node modules...'));
exec('npm i', {
  cwd: survivalGarriguesPackage
},
  () => {
    // Ready to dev
    console.log(chalk.yellow('Babel watcher launching ! You can launch your server !'));
  }
);

