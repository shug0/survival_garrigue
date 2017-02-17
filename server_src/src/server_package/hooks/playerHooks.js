const { playerExists, watchPlayerIntv, getOnlyPosition } = sg.helpers;

jcmp.events.Add('PlayerCreated', player => {
  // Adding props to player
  player.id = player.client.steamId;
  player.escapedNametagName = player.name.replace(/</g, '&lt;').replace(/>/g, '&gt;').substring(0, 40);

  // If the player is admin add a "isAdmin" boolean
  if (sg.config.admins.includes(player.id)) {
    player.isAdmin = true;
    console.log(`L'admin ${player.escapedNametagName} est en jeu.`)
  }

  // Setting Username to ID in database
  sg.firebase.setForUser(player.id, 'username', player.escapedNametagName);

  // Gettinh the user database object
  sg.firebase.getSnapUser(player.id).then((snap) => {
    const playerSnap = snap.val();

    setTimeout(() => {

      if (playerSnap.position) {
        // If the player has a stored position in based make it spawn here
        const position = playerSnap.position;
        player.respawnPosition = new Vector3f(position.x, position.y + 10, position.z);
        player.Respawn();
      }

    }, 3000);

  });

});


jcmp.events.Add('PlayerReady', (player) => {

  const syncUserWithFirebase = watchPlayerIntv(player, setInterval(() => {
    if (playerExists(player)) {
      sg.firebase
        .setForUser(player.id, 'position', getOnlyPosition(player.position))
        .then(() => syncUserWithFirebase());
    }
  }, 5000));

  if (!player.isAdmin) {
    jcmp.events.CallRemote(`set_player_ability`, player, 0xCB836D80, false);
    jcmp.events.CallRemote(`set_player_ability`, player, 0xE060F641, false);
  }

});


jcmp.events.Add('PlayerDeath', (player) => {
  sg.firebase.setForUser(player.id, 'position', getOnlyPosition(player.position))
  .then(() => {
    player.respawnPosition = player.position;

    setTimeout(() => {
      player.Respawn();
    }, sg.config.respawn.players);
  });
});
