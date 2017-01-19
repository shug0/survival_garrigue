'use strict';

var _sg$helpers = sg.helpers,
    echoTitle = _sg$helpers.echoTitle,
    echo = _sg$helpers.echo,
    newVehicle = _sg$helpers.newVehicle;


sg.firebase.getSnapMap('vehicules').then(function (vehicules) {
  echoTitle('Vehicles loading...', 'yellow');

  var vehiculesSnap = vehicules.val();
  var arrayVehiculesSnap = Object.keys(vehiculesSnap);

  arrayVehiculesSnap.forEach(function (key) {
    newVehicle(vehiculesSnap[key], key);
  });

  echo('  ' + arrayVehiculesSnap.length + ' Vehicles loaded \r', 'green');
});