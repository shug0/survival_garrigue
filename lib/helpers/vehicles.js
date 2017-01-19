'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.newVehicle = undefined;

var _conversion = require('./conversion');

var newVehicle = exports.newVehicle = function newVehicle(vehicle, dbKey) {

    var newVehicle = new Vehicle(vehicle.hash, (0, _conversion.vector3f)(vehicle.position), (0, _conversion.vector3f)(vehicle.rotation));

    newVehicle.respawnInformation = vehicle;
    newVehicle.key = dbKey;

    return newVehicle;
};