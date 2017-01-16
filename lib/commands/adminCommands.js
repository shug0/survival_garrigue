'use strict';

var getOnlyPosition = sg.helpers.getOnlyPosition;


sg.commands.category('admin', 'commands that affect admin').add(new sg.commands.Command('car').description('Save the vehicule position in database').handler(function (player) {
  if (player.vehicle) {
    sg.firebase.addToMap('vehicules', player.vehicle.modelHash, getOnlyPosition(player.vehicle.position), getOnlyPosition(player.vehicle.rotation));
  }
}));