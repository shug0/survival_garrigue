'use strict';

var _position = require('../config/position');

var _sg$helpers = sg.helpers,
    playerExists = _sg$helpers.playerExists,
    watchPlayerIntv = _sg$helpers.watchPlayerIntv,
    getOnlyPosition = _sg$helpers.getOnlyPosition;


jcmp.events.Add('PlayerCreated', function (player) {
  player.id = player.client.steamId;
  player.escapedNametagName = player.name.replace(/</g, '&lt;').replace(/>/g, '&gt;').substring(0, 40);
  sg.firebase.setForUser(player.id, 'username', player.escapedNametagName);
});

jcmp.events.Add('PlayerReady', function (player) {
  sg.firebase.setForUser(player.id, 'username', player.escapedNametagName);
  sg.firebase.getSnapUser(player.id).then(function (snap) {
    var playerSnap = snap.val();

    if (playerSnap.position) {
      var position = playerSnap.position;
      player.respawnPosition = new Vector3f(position.x, position.y + 10, position.z);
      player.Respawn();
    } else {
      player.respawnPosition = _position.phare;
      player.Respawn();
    }
  });

  var syncUserPositionWithFirebase = watchPlayerIntv(player, setInterval(function () {
    if (playerExists(player)) {
      sg.firebase.setForUser(player.id, 'position', getOnlyPosition(player.position)).then(function () {
        return syncUserPositionWithFirebase();
      });
    }
  }, 5000));
});

jcmp.events.Add('PlayerDeath', function (player) {
  sg.firebase.setForUser(player.id, 'position', getOnlyPosition(player.position)).then(function () {
    player.respawnPosition = player.position;
    player.Respawn();
  });
});