import { vector3f } from './conversion';

export const newVehicle = (vehicle, dbKey, health = 100) => {

    let newVehicle = new Vehicle(
      vehicle.hash,
      vector3f(vehicle.position),
      vector3f(vehicle.rotation)
    );

    newVehicle.respawnInformation = vehicle;
    newVehicle.key = dbKey;

    const maxHealth = newVehicle.health;
    newVehicle.health = maxHealth / 100 * health;

    return newVehicle;

}
