'use strict';

global.sg = {
    firebase: new (require('./config/firebase')),
    commands: jcmp.events.Call('get_command_manager')[0],
    chat: jcmp.events.Call('get_chat')[0]
}

require('./hooks/index');






