'use strict';

var echo = sg.helpers.echo;


echo('   Loading bootServerHooks', 'green');
require('./bootServerHooks');

echo('   Loading chatHooks', 'green');
require('./chatHooks');

echo('   Loading playerHooks', 'green');
require('./playerHooks');

echo('   Loading vehicleHooks', 'green');
require('./vehicleHooks');

echo('\r');