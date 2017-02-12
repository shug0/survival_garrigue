// Needed modules for building system
var fs = require('fs-extra');
var path = require('path');
var exec = require('child_process').exec;
var chalk = require('chalk');

// init path directory
var appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

// Init path
var clientSrc = resolveApp('./client_src');

// Client Install
console.log(chalk.magenta('INSTALLING CLIENT SIDE...'));
exec('npm i', {
    cwd: clientSrc
  },
  () => {
    exec('npm run build', {
        cwd: clientSrc
      },
      () => {
        console.log(chalk.green('CLIENT SIDE INSTALLED'))
      }
    );
  }
);
