import { phare as pharePosition } from '../config/position';
const { playerExists, watchPlayerIntv, getOnlyPosition } = sg.helpers;

jcmp.events.Add('PlayerCreated', player => {
  player.id = player.client.steamId;
  player.escapedNametagName = player.name.replace(/</g, '&lt;').replace(/>/g, '&gt;').substring(0, 40);

  sg.firebase.setForUser(player.id, 'username', player.escapedNametagName);
  sg.firebase.getSnapUser(player.id).then((snap) => {
    const playerSnap = snap.val();

    if (playerSnap.position) {
      const position = playerSnap.position;
      player.respawnPosition = new Vector3f(position.x, position.y + 10, position.z);
      player.Respawn();
    } else {
      player.respawnPosition = pharePosition;
      player.Respawn();
    }

  });

  sg.firebase.getSnapConfig('admins').then((snap) => {
    const adminsList = snap.val();
    if (adminsList.indexOf(player.id) !== -1 ) {
      player.isAdmin = true;
      console.log(`L'admin ${player.escapedNametagName} est en jeu.`)
    }
  });

});


jcmp.events.Add('PlayerReady', (player) => {

  const syncUserPositionWithFirebase = watchPlayerIntv(player, setInterval(() => {
    if (playerExists(player)) {
      sg.firebase
        .setForUser(player.id, 'position', getOnlyPosition(player.position))
        .then(() => syncUserPositionWithFirebase());
    }
  }, 5000));

});


jcmp.events.Add('PlayerDeath', (player) => {
  sg.firebase.setForUser(player.id, 'position', getOnlyPosition(player.position))
  .then(() => {
    player.respawnPosition = player.position;
    player.Respawn();
  });
});
