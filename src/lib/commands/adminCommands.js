const { getOnlyPosition } = sg.helpers;

sg.commands.category('admin', 'commands that affect admin').add(
  new sg.commands.Command('car')
  .description('Save the vehicule position in database')
  .handler((player) => {
    if (player.vehicle) {
      sg.firebase.addToMap(
        'vehicules',
        player.vehicle.modelHash,
        getOnlyPosition(player.vehicle.position),
        getOnlyPosition(player.vehicle.rotation)
      );
    }
  }
));
