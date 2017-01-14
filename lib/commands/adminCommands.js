'use strict';

sg.commands.category('admin', 'commands that affect admin').add(new sg.commands.Command('car').description('Save the car spawn').handler(function (player) {
  console.log('--------- Save the car spawn ---------');
  if (player.vehicle) {
    console.log('* The player is in a vehicule');
    console.log('   Hash :', player.vehicle.modelHash);
    console.log('   Rotation :', player.vehicle.rotation);
    console.log('   Position :', player.vehicle.position);
  } else {
    console.log('* The player havent vehicules');
  }
}));