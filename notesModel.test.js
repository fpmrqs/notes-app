const NotesModel = require("./notesModel");

describe("NotesModel", () => {
  let notes;
  beforeEach(() => notes = new NotesModel);

  it("returns stored notes with .getNotes", () => {
    expect(notes.getNotes()).toEqual([]);
  });

  it("adds new notes with .addNote", () => {
    notes.addNote("Bring me a spoon");
    expect(notes.getNotes()).toEqual(["Bring me a spoon"]);
    notes.addNote("I want all the spoons");
    expect(notes.getNotes()).toEqual(["Bring me a spoon", "I want all the spoons"]);
  });

  it("empties the notes with .reset", () => {
    notes.addNote("Enough with the bloody spoons");
    notes.reset();
    expect(notes.getNotes()).toEqual([]);
  });
});