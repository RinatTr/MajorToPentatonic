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
    root = this.root.toLowerCase();
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

  rotateToRootPosition() {
    let pos = this.root_positions[this.root[0].toLowerCase()];
    let temp = this.notes_display.slice(0);
    this.notes_display = temp.splice(pos % this.notes_display.length).concat(temp)
  }

  display() {
    let root = this.root[0].toUpperCase();
    let symbol = this.root.length > 1 ? this.root[1] : "";
    return `\n🎺🎺🎺 ${root + symbol} major scale: ${this.notes_display.join(', ')}\n
    Available Pentatonic Scales: ${this.notes_display[1]} minor, ${this.notes_display[2]} minor, ${this.notes_display[5]} minor\n`;
  }

}

let scale1 = new Scale("bb")
scale1.addAccidentals("b")
scale1.rotateToRootPosition()
console.log(scale1.display())
module.exports = { Scale }
