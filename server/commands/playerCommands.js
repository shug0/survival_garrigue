'use strict';

sg.commands.category('player', 'commands that directly affect you').add(new sg.commands.Command('suicide').description('kills you').handler(function (player) {
  player.health = 0;
}));