const { echo } = sg.helpers;

echo('   Loading Players Commands', 'green');
require('./playerCommands');

echo('   Loading Admin Commands', 'green');
require('./adminCommands');



echo('\r');
