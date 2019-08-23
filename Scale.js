const { sharps, flats, notes, rootPositions } = require('./data.js');

class Scale {
  constructor(root_input) {
    this.sharps = sharps;
    this.flats = flats;
    this.notes_display = notes;
    this.root_positions = rootPositions;
    this.root = root_input;
  }

  addAccidentals(type) {
    let accidentalIdx, reference, symbol, interval, root;
    switch(type) {
      case "#":
        accidentalIdx = 3;
        reference = this.sharps;
        symbol = "#";
        interval = 4;
        root = this.root[0].toLowerCase();
        if (this.root[1] === '#') {
          root += 's';
        }
        break;
      case "b":
        accidentalIdx = 6;
        reference = this.flats;
        symbol = "b";
        interval = 3;
        root = this.root.toLowerCase();
        break;
    }
    for (let i = 0; i < reference[root]; i++) {
      accidentalIdx = accidentalIdx % this.notes_display.length;
      this.notes_display[accidentalIdx] = this.notes_display[accidentalIdx] + symbol;
      accidentalIdx += interval;
    }
    // console.log(this.notes_display);
  }

  rotateToRootPosition() {
    let pos = this.root_positions[this.root[0].toLowerCase()];
    let temp = this.notes_display.slice(0);
    this.notes_display = temp.splice(pos % this.notes_display.length).concat(temp)
  }

}
let scale1 = new Scale("g#")
scale1.addAccidentals("#")
console.log(scale1.notes_display);
scale1.rotateToRootPosition()
console.log(scale1.notes_display);
// scale.rotateToRootPosition()
