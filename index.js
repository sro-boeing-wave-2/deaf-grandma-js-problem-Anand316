/**
 * @fileOverview Contains logic of Deaf Grandma
 */
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */

let x = 0;
print('What do you want to say to Grandma!!');
while (x < 2) {
  const y = prompt('');
  if (isUppercase(y)) {
    if (y === 'BYE') {
      x += 1;
    }
    const s = 'NO, NOT SINCE 19';
    print(s + getRandomValue(30, 50));
  } else {
    print('HUH?! SPEAK UP, SONNY!');
  }
}
