'use strict';

var _position = require('../config/position');

var _conversion = require('../helpers/conversion');

jcmp.events.Add('PlayerCreated', function (player) {

    player.id = player.client.steamId;

    player.escapedNametagName = player.name.replace(/</g, '&lt;').replace(/>/g, '&gt;').substring(0, 40);
    sg.firebase.setForUser(player.id, 'username', player.escapedNametagName);
});

jcmp.events.Add("PlayerReady", function (player) {

    sg.firebase.setForUser(player.id, 'username', player.escapedNametagName);

    sg.firebase.getSnapUser(player.id).then(function (snap) {
        if (snap.val().position) {
            var position = snap.val().position;
            player.respawnPosition = new Vector3f(position.x, position.y + 10, position.z);;
            player.Respawn();
        } else {
            player.respawnPosition = _position.phare;
            player.Respawn();
        }
    });

    var syncUserPositionWithFirebase = sg.backWorks.watchPlayerIntv(player, setInterval(function () {
        sg.firebase.setForUser(player.id, 'position', (0, _conversion.getOnlyPosition)(player.position)).then(function () {
            return syncUserPositionWithFirebase();
        });
    }, 5000));
});

jcmp.events.Add('PlayerDeath', function (player, killer, reason) {
    sg.firebase.setForUser(player.id, 'position', (0, _conversion.getOnlyPosition)(player.position)).then(function () {
        player.respawnPosition = player.position;
        player.Respawn();
    });
});