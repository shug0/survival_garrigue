const { echo } = sg.helpers;

echo('   Loading bootServerHooks', 'green');
require('./bootServerHooks');

echo('   Loading playerHooks', 'green');
require('./playerHooks');

echo('   Loading vehicleHooks', 'green');
require('./vehicleHooks');


echo('\r');
