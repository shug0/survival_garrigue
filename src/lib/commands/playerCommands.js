sg.commands.category('player', 'commands that directly affect you')
  .add(new sg.commands.Command('suicide')
    .description('kills you')
    .handler((player) => { player.health = 0; }));
