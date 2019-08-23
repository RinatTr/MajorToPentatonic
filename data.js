const sharps = {
  c: 0,
  g: 1,
  d: 2,
  a: 3,
  e: 4,
  b: 5,
  fs: 6,
  cs: 7,
  gs: 8,
  ds: 9,
  as: 10
};

const flats = {
  c: 0,
  f: 1,
  bb: 2,
  eb: 3,
  ab: 4,
  db: 5,
  gb: 6,
  cb: 7,
  fb: 8
};

const rootPositions = {
  c: 0,
  d: 1,
  e: 2,
  f: 3,
  g: 4,
  a: 5,
  b: 6,
}

const notes = ['C','D','E','F','G','A','B'];

module.exports = {  sharps,
                    flats,
                    notes,
                    rootPositions }
