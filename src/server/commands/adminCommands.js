const { getOnlyPosition } = sg.helpers;

sg.commands.category('admin', 'commands that affect admin')
  .add(
    new sg.commands.Command('save')
    .description('Save the vehicule position in database')
    .handler((player) => {
      if (player.isAdmin) {

        if (player.vehicle) {
          sg.firebase.addToMap(
            'vehicules',
            player.vehicle.modelHash,
            getOnlyPosition(player.vehicle.position),
            getOnlyPosition(player.vehicle.rotation),
            (key) => {
              player.vehicle.key = key;
              sg.chat.send(player, "Vehicle saved.");
            });
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
    new sg.commands.Command('s')
      .parameter('item', 'string', 'item to spawn', { isTextParameter: true })
      .description('Spawn testing object')
      .handler((player, item) => {
        new GameObject(item, player.aimPosition);
      }
    ))








