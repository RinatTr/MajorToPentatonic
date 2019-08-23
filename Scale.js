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

  }

  setRootPosition() {

  }

}
let scale = new Scale("a").addSharps()
