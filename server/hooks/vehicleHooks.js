'use strict';

var newVehicle = sg.helpers.newVehicle;
var vehicles = sg.config.vehicles;


jcmp.events.Add('VehicleDestroyed', function (vehicle) {

  setTimeout(function () {
    if (vehicle.respawnInformation) {
      newVehicle(vehicle.respawnInformation, vehicle.key);
    }
  }, vehicles.spawnTimeout);
});