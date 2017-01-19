const { echoTitle, echo, newVehicle } = sg.helpers;

sg.firebase.getSnapMap('vehicules').then((vehicules) => {
  echoTitle('Vehicles loading...', 'yellow');

  const vehiculesSnap = vehicules.val();
  const arrayVehiculesSnap = Object.keys(vehiculesSnap);

  arrayVehiculesSnap.forEach((key) => {
    newVehicle(vehiculesSnap[key], key);
  });

  echo(`  ${arrayVehiculesSnap.length} Vehicles loaded \r`, 'green');

});

