import firebase from './lib/firebase/Firebase';
import workarounds from './lib/helpers/workarounds';

global.sg = {
  firebase: new(firebase),
  backWorks: workarounds,
  commands: jcmp.events.Call('get_command_manager')[0],
  chat: jcmp.events.Call('get_chat')[0],
};

const hash = 1863812216;
const rotation = new Vector3f(-3.140878200531006, 0.7809399366378784, -3.133327007293701);
const position = new Vector3f(3174.2431640625, 1032.96826171875, 1159.8465576171875);

new Vehicle(hash, position, rotation);

require('./lib/hooks/index');
require('./lib/commands/index');
