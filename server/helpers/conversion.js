"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getOnlyPosition = exports.getOnlyPosition = function getOnlyPosition(vector3f) {
  return {
    x: vector3f.x,
    y: vector3f.y,
    z: vector3f.z
  };
};

var vector3f = exports.vector3f = function vector3f(position) {
  return new Vector3f(position.x, position.y, position.z);
};