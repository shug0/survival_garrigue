'use strict';

jcmp.events.Add('chat_message', (player, message) => {
    console.log(`${player.escapedNametagName}: ${message}`);
});

jcmp.events.AddRemoteCallable('chat_ready', player => {
    sg.chat.send(player, 'Spawning might take a while. Please wait and enjoy the view.');
});