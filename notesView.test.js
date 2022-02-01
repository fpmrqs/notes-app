/**
 * @jest-environment jsdom
 */

const NotesView = require("./notesView");
const NotesModel = require("./notesModel")
const fs = require("fs");

describe("NotesView", () => {
  document.body.innerHTML = fs.readFileSync('./index.html');
  const notesModel = new NotesModel;
  notesModel.addNote("I'm so hungry");
  notesModel.addNote("This train is killing me");
  const notesView = new NotesView(notesModel);
  notesView.displayNotes();

  it("adds notes to the view", () => {
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

})