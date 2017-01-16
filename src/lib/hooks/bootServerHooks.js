const { vector3f, echoTitle, echo } = sg.helpers;

sg.firebase.getSnapMap('vehicules').then((vehicules) => {
  echoTitle('Vehicles loading...', 'yellow');

  const vehiculesSnap = vehicules.val();
  const arrayVehiculesSnap = Object.keys(vehiculesSnap);

  arrayVehiculesSnap.forEach((key) => {
    let newVehicleRef = new Vehicle(
      vehiculesSnap[key].hash,
      vector3f(vehiculesSnap[key].position),
      vector3f(vehiculesSnap[key].rotation)
    );
    newVehicleRef.respawnInformation = vehiculesSnap[key];
  });


  echo(`  ${arrayVehiculesSnap.length} Vehicles loaded \r`, 'green');

});

