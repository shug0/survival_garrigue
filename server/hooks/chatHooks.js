'use strict';

jcmp.events.AddRemoteCallable('chat_ready', function (player) {
  sg.chat.send(player, 'Spawning might take a while. Please wait and enjoy the view.');
});