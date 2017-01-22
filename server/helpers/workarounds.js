'use strict';

var watched = new Map();

jcmp.events.Add('PlayerDestroyed', function (player) {
  if (watched.has(player.client.steamId)) {
    var tms = watched.get(player.client.steamId);
    tms.forEach(function (t) {
      if (t.timeout) {
        clearTimeout(t.timeout);
      }
      if (t.interval) {
        clearInterval(t.interval);
      }
    });
    watched.delete(player.client.steamId);
  }
});
exports.watchPlayer = function watchPlayer(player, timeout) {
  var idx = 0;
  var arr = null;
  function done() {
    arr.splice(idx, 1);
  }
  if (watched.has(player.client.steamId)) {
    arr = watched.get(player.client.steamId);
    idx = arr.length;
    arr.push({ timeout: timeout, interval: null });
    return done;
  }
  arr = [{ timeout: timeout, interval: null }];
  watched.set(player.client.steamId, arr);
  return done;
};

exports.watchPlayerIntv = function watchPlayerIntv(player, interval) {
  var idx = 0;
  var arr = null;
  function done() {
    arr.splice(idx, 1);
  }
  if (watched.has(player.client.steamId)) {
    arr = watched.get(player.client.steamId);
    idx = arr.length;
    arr.push({ interval: interval, timeout: null });
    return done;
  }
  arr = [{ interval: interval, timeout: null }];
  watched.set(player.client.steamId, arr);
  return done;
};

exports.playerExists = function playerExists(player) {
  var r = typeof jcmp.players.find(function (p) {
    return p.networkId === player.networkId;
  }) !== 'undefined';
  return r;
};

exports.playerIdExists = function playerIdExists(id) {
  var r = typeof jcmp.players.find(function (p) {
    return p.networkId === id;
  }) !== 'undefined';
  return r;
};