import Firebase from './server_package/firebase/Firebase';
// Helpers
import * as conversionHelpers from './server_package/helpers/conversion';
import * as workaroundsHelpers from './server_package/helpers/workarounds';
import * as serverHelpers from './server_package/helpers/server';
import * as vehicleHelpers from './server_package/helpers/vehicles';
import * as survivalHelpers from './server_package/helpers/survival';
// Config
import * as respawnConfig from './server_package/config/respawn';

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
    ...survivalHelpers,
  },
};

// Load the config in the database
sg.firebase.getSnapConfig('').then((config) => {
  sg.config = {
    ...config.val(),
    ...respawnConfig
  };

  serverHelpers.echo('\r----------- INIT ALL HOOKS -----------\r', 'magenta');
  require('./server_package/hooks/index');

  serverHelpers.echo('\r----------- INIT ALL COMMANDS -----------\r', 'magenta');
  require('./server_package/commands/index');

});






