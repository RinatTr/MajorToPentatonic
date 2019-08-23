const { sharps, flats, notes } = require('./data.js');

class Scale {
  constructor(root_input) {
    this.sharps = sharps;
    this.flats = flats;
    this.notes_display = notes;
    this.root = root_input;
  }

  addSharps() {
    let root = this.root[0].toLowerCase();
    let sharpIdx = 3;
    for (let i = 0; i < this.sharps[root]; i++) {
      sharpIdx = sharpIdx % this.notes_display.length
      this.notes_display[sharpIdx] = this.notes_display[sharpIdx] + "#";
      sharpIdx += 4;
    }
    console.log(this.notes_display)
  }

  addFlats() {
    let root = this.root[0].toLowerCase();
    let flatIdx = 6;
    for (let i = 0; i < this.flats[root]; i++) {
      flatIdx = flatIdx % this.notes_display.length
      this.notes_display[flatIdx] = this.notes_display[flatIdx] + "b";
      flatIdx += 3;
    }
    console.log(this.notes_display)

  }

  addAccidentals(type) {
    let root = this.root[0].toLowerCase();
    let accidentalIdx, reference, symbol, interval;
    switch(type) {
      case "#":
        accidentalIdx = 3;
        reference = this.sharps;
        symbol = "#";
        interval = 4;
        break;
      case "b":
        accidentalIdx = 6;
        reference = this.flats;
        symbol = "b";
        interval = 3;
        break;
    }
    for (let i = 0; i < reference[root]; i++) {
      accidentalIdx = accidentalIdx % this.notes_display.length;
      this.notes_display[accidentalIdx] = this.notes_display[accidentalIdx] + symbol;
      accidentalIdx += interval;
    }
  }

  setRootPosition() {

  }

}
let scale = new Scale("g").addAccidentals("#")
