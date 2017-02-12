const { getOnlyPosition } = sg.helpers;

sg.commands.category('admin', 'commands that affect admin')
  .add(
    new sg.commands.Command('save')
    .description('Save the vehicule position in database')
    .parameter('saveHealth', 'number', 'Save health ? 1 or 0', { isOptional: true })
    .handler((player, saveHealth) => {
      if (player.isAdmin) {

        if (player.vehicle) {
          const options = {
            health: saveHealth ? player.vehicle.health : null
          };

          sg.firebase.addToMap(
            'vehicules',
            player.vehicle.modelHash,
            getOnlyPosition(player.vehicle.position),
            getOnlyPosition(player.vehicle.rotation),
            options,
            (key) => {
              player.vehicle.key = key;
              sg.chat.send(player, "Vehicle saved.");
            }
          );
        }

      }
    }
  ))
  .add(
    new sg.commands.Command('remove')
    .description('Remove the vehicule to the database')
    .handler((player) => {
        if (player.isAdmin) {

          if (player.vehicle) {
            sg.firebase.removeToMap(
              'vehicules',
              player.vehicle.key
            );
            sg.chat.send(player, "Vehicle removed.");
          }

        }
      }
    ))
  .add(
    new sg.commands.Command('admin')
      .description('Test if you are admin or not')
      .handler((player) => {
        console.log(player.isAdmin);
      }
  ))
  .add(
    new sg.commands.Command('jumpto')
      .description('Teleport player to the specified position instantly')
      .parameter('x', 'number', 'position x')
      .parameter('y', 'number', 'position y')
      .parameter('z', 'number', 'position z')
      .handler((player, x, y, z) => {
        if (player.isAdmin) {
          player.respawnPosition = new Vector3f(x, y + 10, z);
          console.log(`Respawn à la position ${player.respawnPosition.x}, ${player.respawnPosition.y}, ${player.respawnPosition.z}`);
          player.Respawn();
        }
      }
  ))
  .add(
    new sg.commands.Command('s')
      .parameter('item', 'string', 'item to spawn', { isTextParameter: true })
      .description('Spawn testing object')
      .handler((player, item) => {
        if (player.isAdmin) {
          new GameObject(item, player.aimPosition);
        }
      }
    ))

  .add(
    new sg.commands.Command('hv')
      .parameter('health', 'number', 'Percentage to 0 from 100')
      .description('Take off the health of a vehicle depending on number in parameter (in percentage)')
      .handler((player, health) => {
          if (player.isAdmin && player.vehicle) {
            const currentHealth = player.vehicle.health;
            player.vehicle.health = currentHealth * health / 100;
          }
        }
    ));








