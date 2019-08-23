//Major Scale Builder + Available Pentatonic Scales
const readline = require('readline-Sync');
const { Scale } = require('./Scale.js');
const { sharps, flats } = require('./data.js');

const buildScale = () => {
  const userInput = readline.question(`Input the root of a major scale: `);
  const lcInput = userInput.toLowerCase()
  let type;
  if (sharps[lcInput] || lcInput === "c") {
    type = "#";
  } else if (flats[lcInput]) {
    type = "b";
  } else {
     setTimeout(buildScale,1000);
     return console.log(`\n💥 '${userInput}' is an invalid input. Please Try Again.💥\n`)
  }

  let scale = new Scale(lcInput);
  scale.addAccidentals(type);
  scale.rotateToRootPosition();
  console.log(scale.display());
}

buildScale()
