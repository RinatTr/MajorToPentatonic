//Major Scale Builder + Available Pentatonic Scales
const readline = require('readline-Sync');
const { Scale } = require('./Scale.js');
const { sharps, flats } = require('./data.js');

const buildScale = () => {
  const userInput = readline.question(`Input the root of a major scale: `);
  const lcInput = userInput.toLowerCase()
  let type;
  if (sharps[lcInput] || lcInput === "c") {
    //
    return console.log(circleOfFifths(userInput));
  } else if (flats[lcInput]) {
    return console.log(circleOfFourths(userInput));
  } else {
     setTimeout(buildScale,1000);
     return console.log(`\n💥 '${userInput}' is an invalid input. Please Try Again.💥\n`)
  }
}

buildScale()
