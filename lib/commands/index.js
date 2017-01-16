'use strict';

var echo = sg.helpers.echo;


echo('   Loading Players Commands', 'green');
require('./playerCommands');

echo('   Loading Admin Commands', 'green');
require('./adminCommands');

echo('\r');