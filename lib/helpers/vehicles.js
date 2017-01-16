"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var newVehicle = exports.newVehicle = function newVehicle(vehicle) {
  return new Vehicle(vehicle.hash, vector3f(vehicle.position), vector3f(vehicle.rotation));
};