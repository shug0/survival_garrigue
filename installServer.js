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
var serverSrc = resolveApp('./server_src');

// Server Install
console.log(chalk.magenta('INSTALLING SERVER SIDE...'));
exec('npm i', {
    cwd: serverSrc
  },
  () => {
    exec('node ./build.js', {
        cwd: serverSrc
      },
      () => console.log(chalk.green('SERVER SIDE INSTALLED'))
    );
  }
);
