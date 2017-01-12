const teleportLocations = require('../config/defaultTeleport');
const spawnLocations = teleportLocations.map(loc => {
    return new Vector3f(loc.position.x, loc.position.y + 10, loc.position.z);
});

jcmp.events.Add('PlayerCreated', player => {
    player.escapedNametagName = player.name.replace(/</g, '&lt;').replace(/>/g, '&gt;').substring(0, 40);
    sg.chat.broadcast(`** ${player.escapedNametagName} has joined.`, new RGB(255, 255, 255));
    console.log(`** ${player.escapedNametagName} has joined.`)
});

jcmp.events.Add("PlayerReady", (player) => {

    sg.firebase.getBase().ref('users/' + player.client.steamId + '/username').set(
        player.name
    );

    sg.firebase.getBase().ref('users/' + player.client.steamId).once('value').then((snap) => {
        if (snap.val().position) {
            const position = snap.val().position;
            player.respawnPosition = new Vector3f(position.x, position.y + 10, position.z);;
            player.Respawn()
        }
        else {
            player.respawnPosition = spawnLocations[0];
            player.Respawn()
        }
    });

});

jcmp.events.Add('PlayerDeath', (player, killer, reason) => {

    const actualPosition = player.position;
    sg.firebase.getBase().ref('users/' + player.client.steamId + '/position').set(
        {
            "x": actualPosition.x,
            "y": actualPosition.y,
            "z": actualPosition.z
        }
    ).then(() => {
        player.respawnPosition = actualPosition;
        player.Respawn();
    });



});

