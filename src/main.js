import Firebase from './lib/firebase/Firebase';
// Helpers
import * as conversionHelpers from './lib/helpers/conversion';
import * as workaroundsHelpers from './lib/helpers/workarounds';
import * as serverHelpers from './lib/helpers/server';
// Config
import * as vehiclesConfig from './lib/config/vehicles';

serverHelpers.echoTitle('SURVIVAL GARRIGUE LOADING...', 'yellow');

global.sg = {
  firebase: new (Firebase),
  commands: jcmp.events.Call('get_command_manager')[0],
  chat: jcmp.events.Call('get_chat')[0],
  helpers: {
    ...conversionHelpers,
    ...workaroundsHelpers,
    ...serverHelpers,
  },
  config: {
    ...vehiclesConfig
  }
};

serverHelpers.echo('\r----------- INIT ALL HOOKS -----------\r', 'magenta');
require('./lib/hooks/index');

serverHelpers.echo('\r----------- INIT ALL COMMANDS -----------\r', 'magenta');
require('./lib/commands/index');


