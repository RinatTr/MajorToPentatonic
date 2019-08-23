//Major Scale Builder + Available Pentatonic Scales
const readline = require('readline-Sync');

const circleOfFifths = (userInput) => {
  let root = userInput[0].toLowerCase();
  if (userInput[1] === '#') {
    root += 's';
  }
  let numberOfSharps = {
    'c':0,
    'g':1,
    'd':2,
    'a':3,
    'e':4,
    'b':5,
    'fs':6,
    'cs':7,
    'gs':8,
    'ds':9,
    'as':10
  }
  let notes = ['C','D','E','F','G','A','B'];
  let j = 0;
  for (let i = 0; i < numberOfSharps[root]; i++) {
    if (j >= notes.length - 3) {
     j -= notes.length;
    }
    notes[j + 3] = notes[j + 3] + "#";
    j += 4;
  }
  let k = notes.indexOf(userInput.toUpperCase());
  let scale = notes.map(note => {
    let output = [];
    if (k >= notes.length) {
      k -= notes.length;
    }
    output.push(notes[k]);
    k++;
    return output;
  });

  return `\n🎺🎺🎺 ${userInput.toUpperCase()} major scale: ${scale.join(', ')}\n
  Available Pentatonic Scales: ${scale[1]} minor, ${scale[2]} minor, ${scale[5]} minor\n`;
}
const circleOfFourths = (userInput) => {
  let root = userInput.toLowerCase();
  let numberOfFlats = {
    'c':0,
    'f':1,
    'bb':2,
    'eb':3,
    'ab':4,
    'db':5,
    'gb':6,
    'cb':7,
    'fb':8
  }
  let notes = ['C','D','E','F','G','A','B'];
  let j = 0;
  for (let i = 0; i < numberOfFlats[root]; i++) {
    if (j >= notes.length - 6) {
     j -= notes.length;
    }
    notes[j + 6] = notes[j + 6]+"b";
    j += 3;
  }
  let k = notes.indexOf(userInput[0].toUpperCase() + userInput[1]);
  let scale = notes.map(note => {
    let output = [];
    if (k >= notes.length) {
      k -= notes.length;
    }
    output.push(notes[k]);
    k++;
    return output;
  });

  return `\n🎺🎺🎺 ${userInput[0].toUpperCase() + userInput[1]} major scale: ${scale.join(', ')}\n
  Available Pentatonic Scales: ${scale[1]} minor, ${scale[2]} minor, ${scale[5]} minor\n`;
}

let fifths = {
  'c':0,
  'g':1,
  'd':2,
  'a':3,
  'e':4,
  'b':5,
  'f#':6,
  'c#':7,
  'g#':8,
  'd#':9,
  'a#':10
}
let fourths = {
  'c':0,
  'f':1,
  'bb':2,
  'eb':3,
  'ab':4,
  'db':5,
  'gb':6,
  'cb':7,
  'fb':8
}

const buildScale = () => {
  const userInput = readline.question(`Input the root of a major scale: `);
  if (fifths[userInput.toLowerCase()]) {
    return console.log(circleOfFifths(userInput));
  } else if (fourths[userInput.toLowerCase()]) {
    return console.log(circleOfFourths(userInput));
  } else {
     setTimeout(buildScale,1000);
     return console.log(`\n💥 '${userInput}' is an invalid input. Please Try Again.💥\n`)
  }
}

buildScale()
