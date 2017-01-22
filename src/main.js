import Firebase from './server/firebase/Firebase';
// Helpers
import * as conversionHelpers from './server/helpers/conversion';
import * as workaroundsHelpers from './server/helpers/workarounds';
import * as serverHelpers from './server/helpers/server';
import * as vehicleHelpers from './server/helpers/vehicles';
// Config
import * as vehiclesConfig from './server/config/vehicles';

serverHelpers.echoTitle('SURVIVAL GARRIGUE LOADING...', 'yellow');

global.sg = {
  firebase: new (Firebase),
  commands: jcmp.events.Call('get_command_manager')[0],
  chat: jcmp.events.Call('get_chat')[0],
  helpers: {
    ...conversionHelpers,
    ...workaroundsHelpers,
    ...serverHelpers,
    ...vehicleHelpers,
  },
  config: {
    ...vehiclesConfig
  }
};

serverHelpers.echo('\r----------- INIT ALL HOOKS -----------\r', 'magenta');
require('./server/hooks/index');

serverHelpers.echo('\r----------- INIT ALL COMMANDS -----------\r', 'magenta');
require('./server/commands/index');


