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
rimrafSync(survivalGarriguesPackage + '/server_package');
rimrafSync(survivalGarriguesPackage + '/main.js');
rimrafSync(survivalGarriguesPackage + '/package.json');

// Compile the src files and copy them to the package directory
console.log(chalk.green('Compile JS files with Babel...'));
exec('babel ' + serverSrc + ' -d ' + survivalGarriguesPackage);

// Copy the package.json file
console.log(chalk.green('Copy package.json file...'));
fs.copySync(serverSrcPackageJson, survivalGarriguesPackage + '/package.json' );

// Download needed packages
console.log(chalk.magenta('Install Node modules...'));
exec('npm i', {
  cwd: survivalGarriguesPackage
},
  () => console.log(chalk.yellow('Done ! You can launch your server !'))
);

