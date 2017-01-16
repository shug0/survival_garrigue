"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var vector3f = sg.helpers.vector3f;
var newVehicle = exports.newVehicle = function newVehicle() {
  var newVehicleExtended = new Vehicle(vehicle.hash, vector3f(vehicle.position), vector3f(vehicle.rotation));
  newVehicleExtended.respawnInformations = vehicle;
};