const { getOnlyPosition } = sg.helpers;

sg.commands.category('admin', 'commands that affect admin')
  .add(
    new sg.commands.Command('save')
    .description('Save the vehicule position in database')
    .handler((player) => {
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
  ))
  .add(
    new sg.commands.Command('remove')
    .description('Remove the vehicule to the database')
    .handler((player) => {
        if (player.vehicle) {
          sg.firebase.removeToMap(
            'vehicules',
            player.vehicle.key
          );
          sg.chat.send(player, "Vehicle removed.");
        }
      }
    ))
