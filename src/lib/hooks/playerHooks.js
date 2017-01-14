import { phare as pharePosition } from '../config/position';
import { getOnlyPosition } from '../helpers/conversion';

jcmp.events.Add('PlayerCreated', player => {
  player.id = player.client.steamId;
  player.escapedNametagName = player.name
  .replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .substring(0, 40);
  sg.firebase.setForUser(player.id, 'username', player.escapedNametagName);
});

jcmp.events.Add('PlayerReady', (player) => {
  sg.firebase.setForUser(player.id, 'username', player.escapedNametagName);
  sg.firebase.getSnapUser(player.id).then((snap) => {
    if (snap.val().position) {
      const position = snap.val().position;
      player.respawnPosition = new Vector3f(position.x, position.y + 10, position.z);
      player.Respawn();
    } else {
      player.respawnPosition = pharePosition;
      player.Respawn();
    }
  });

  const syncUserPositionWithFirebase = sg.backWeorks.watchPlayerIntv(player, setInterval(() => {
    sg.firebase
      .setForUser(player.id, 'position', getOnlyPosition(player.position))
      .then(() => syncUserPositionWithFirebase());
  }, 5000));
});

jcmp.events.Add('PlayerDeath', (player) => {
  sg.firebase.setForUser(player.id, 'position', getOnlyPosition(player.position))
  .then(() => {
    player.respawnPosition = player.position;
    player.Respawn();
  });
});
