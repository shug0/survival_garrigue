'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// Helpers

// Config


var _Firebase = require('./server/firebase/Firebase');

var _Firebase2 = _interopRequireDefault(_Firebase);

var _conversion = require('./server/helpers/conversion');

var conversionHelpers = _interopRequireWildcard(_conversion);

var _workarounds = require('./server/helpers/workarounds');

var workaroundsHelpers = _interopRequireWildcard(_workarounds);

var _server = require('./server/helpers/server');

var serverHelpers = _interopRequireWildcard(_server);

var _vehicles = require('./server/helpers/vehicles');

var vehicleHelpers = _interopRequireWildcard(_vehicles);

var _vehicles2 = require('./server/config/vehicles');

var vehiclesConfig = _interopRequireWildcard(_vehicles2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

serverHelpers.echoTitle('SURVIVAL GARRIGUE LOADING...', 'yellow');

global.sg = {
  firebase: new _Firebase2.default(),
  commands: jcmp.events.Call('get_command_manager')[0],
  chat: jcmp.events.Call('get_chat')[0],
  helpers: _extends({}, conversionHelpers, workaroundsHelpers, serverHelpers, vehicleHelpers),
  config: _extends({}, vehiclesConfig)
};

serverHelpers.echo('\r----------- INIT ALL HOOKS -----------\r', 'magenta');
require('./server/hooks/index');

serverHelpers.echo('\r----------- INIT ALL COMMANDS -----------\r', 'magenta');
require('./server/commands/index');