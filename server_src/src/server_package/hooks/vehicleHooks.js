const { newVehicle } = sg.helpers;

jcmp.events.Add('VehicleDestroyed', vehicle => {

  setTimeout(() => {
    if (vehicle.respawnInformation) {
      newVehicle(vehicle.respawnInformation, vehicle.key);
     }
  }, sg.config.respawn.vehicles);

});