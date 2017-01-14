'use strict';

var _Firebase = require('./lib/firebase/Firebase');

var _Firebase2 = _interopRequireDefault(_Firebase);

var _workarounds = require('./lib/helpers/workarounds');

var _workarounds2 = _interopRequireDefault(_workarounds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.sg = {
    firebase: new _Firebase2.default(),
    workarounds: _workarounds2.default,
    commands: jcmp.events.Call('get_command_manager')[0],
    chat: jcmp.events.Call('get_chat')[0]
};

//new Vehicle(modelhash, position, rotation)
// Vector3f(number x, number y, number z)

var hash = 1863812216;
var rotation = new Vector3f(-3.140878200531006, 0.7809399366378784, -3.133327007293701);
var position = new Vector3f(3174.2431640625, 1032.96826171875, 1159.8465576171875);

new Vehicle(hash, position, rotation);

require('./lib/hooks/index');
require('./lib/commands/index');