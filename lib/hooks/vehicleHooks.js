'use strict';

var vector3f = sg.helpers.vector3f;
var vehicles = sg.config.vehicles;


jcmp.events.Add('VehicleDestroyed', function (vehicle) {

  setTimeout(function () {
    if (vehicle.respawnInformation) {
      var newVehicleRef = new Vehicle(vehicle.respawnInformation.hash, vector3f(vehicle.respawnInformation.position), vector3f(vehicle.respawnInformation.rotation));
      newVehicleRef.respawnInformation = vehicle.respawnInformation;
      newVehicleRef.key = vehicle.key;
    }
  }, vehicles.spawnTimeout);
});