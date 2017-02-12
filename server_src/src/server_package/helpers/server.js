import chalk from 'chalk';

export const echo = (message, color) => {
  if (color) {
    console.log(chalk[color](message));
  } else {
    console.log(message);
  }
};

export const echoTitle = (message, color) => {
  const createCharLoop = (message, charToFill) => {
    return message.split('').map(letter => charToFill).join('');
  }

  echo('\r');
  echo(`|--------${createCharLoop(message, '-')}--------|`, color);
  echo(`|        ${createCharLoop(message, ' ')}        |`, color);
  echo(`|        ${message}        |`, color);
  echo(`|        ${createCharLoop(message, ' ')}        |`, color);
  echo(`|--------${createCharLoop(message, '-')}--------|`, color);
  echo('\r');
};





