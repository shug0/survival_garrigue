import { vector3f } from './conversion';

export const newVehicle = (vehicle, dbKey) => {

    let newVehicle = new Vehicle(
      vehicle.hash,
      vector3f(vehicle.position),
      vector3f(vehicle.rotation)
    );

    if (vehicle.options !== undefined) {
        newVehicle.health = vehicle.options.health;
    }
    newVehicle.respawnInformation = vehicle;
    newVehicle.key = dbKey;

    return newVehicle;

};
