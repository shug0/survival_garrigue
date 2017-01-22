const { newVehicle } = sg.helpers;
const { vehicles } = sg.config;

jcmp.events.Add('VehicleDestroyed', vehicle => {

  setTimeout(() => {
    if (vehicle.respawnInformation) {
      newVehicle(vehicle.respawnInformation, vehicle.key);
     }
  }, vehicles.spawnTimeout);

});