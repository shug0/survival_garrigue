'use strict';

var getOnlyPosition = sg.helpers.getOnlyPosition;


sg.commands.category('admin', 'commands that affect admin').add(new sg.commands.Command('save').description('Save the vehicule position in database').handler(function (player) {
  if (player.vehicle) {
    sg.firebase.addToMap('vehicules', player.vehicle.modelHash, getOnlyPosition(player.vehicle.position), getOnlyPosition(player.vehicle.rotation));
  }
})).add(new sg.commands.Command('remove').description('Remove the vehicule to the database').handler(function (player) {
  if (player.vehicle) {
    sg.firebase.removeToMap('vehicules', player.vehicle.key);
  }
}));