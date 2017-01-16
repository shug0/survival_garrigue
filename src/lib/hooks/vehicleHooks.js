const { vector3f } = sg.helpers;
const { vehicles } = sg.config;

jcmp.events.Add('VehicleDestroyed', vehicle => {

  setTimeout(() => {
    if (vehicle.respawnInformation) {
      let newVehicleRef = new Vehicle(
        vehicle.respawnInformation.hash,
        vector3f(vehicle.respawnInformation.position),
        vector3f(vehicle.respawnInformation.rotation)
      );
      newVehicleRef.respawnInformation = vehicle.respawnInformation;
    }
  }, vehicles.spawnTimeout);

});