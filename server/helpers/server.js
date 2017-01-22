'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.echoTitle = exports.echo = undefined;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var echo = exports.echo = function echo(message, color) {
  if (color) {
    console.log(_chalk2.default[color](message));
  } else {
    console.log(message);
  }
};

var echoTitle = exports.echoTitle = function echoTitle(message, color) {
  var createCharLoop = function createCharLoop(message, charToFill) {
    return message.split('').map(function (letter) {
      return charToFill;
    }).join('');
  };

  echo('\r');
  echo('|--------' + createCharLoop(message, '-') + '--------|', color);
  echo('|        ' + createCharLoop(message, ' ') + '        |', color);
  echo('|        ' + message + '        |', color);
  echo('|        ' + createCharLoop(message, ' ') + '        |', color);
  echo('|--------' + createCharLoop(message, '-') + '--------|', color);
  echo('\r');
};