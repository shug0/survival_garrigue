'use strict';

var _sg$helpers = sg.helpers,
    vector3f = _sg$helpers.vector3f,
    echoTitle = _sg$helpers.echoTitle,
    echo = _sg$helpers.echo;


sg.firebase.getSnapMap('vehicules').then(function (vehicules) {
  echoTitle('Vehicles loading...', 'yellow');

  var vehiculesSnap = vehicules.val();
  var arrayVehiculesSnap = Object.keys(vehiculesSnap);

  arrayVehiculesSnap.forEach(function (key) {
    var newVehicleRef = new Vehicle(vehiculesSnap[key].hash, vector3f(vehiculesSnap[key].position), vector3f(vehiculesSnap[key].rotation));
    newVehicleRef.respawnInformation = vehiculesSnap[key];
    newVehicleRef.key = key;
  });

  echo('  ' + arrayVehiculesSnap.length + ' Vehicles loaded \r', 'green');
});