const { sharps, flats, notes } = require('./data.js');

class Scale {
  constructor() {
    this.sharps = sharps;
    this.flats = flats;
    this.notes = notes;
  }
}
