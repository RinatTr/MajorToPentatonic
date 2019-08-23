const { sharps, flats, notes } = require('./data.js');

class Scale {
  constructor(root_input) {
    this.sharps = sharps;
    this.flats = flats;
    this.notes_display = notes;
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
    console.log(this.notes_display);
  }

  rotateToRootPosition() {
    let pos = this.notes_display.indexOf(this.root.toUpperCase());
    this.notes_display.splice(pos % this.notes_display.length).concat(this.notes_display)
    // const rotate = (arr, times = 1) => {
    // 	let dup = arr.slice(0);
    // 	return dup.splice(times % arr.length).concat(dup)
    // }
    // let scale = rotate(notes, rootPosition)
    console.log(this.notes_display)
  }

}
let scale = new Scale("f#").addAccidentals("#").rotateToRootPosition()
