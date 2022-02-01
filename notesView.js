class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");
  }

  displayNotes() {

    this.model.getNotes().forEach(aNote => {
      let div = document.createElement("div");
      div.classList.add("note");

      this.mainContainerEl.append(div);
      div.append(aNote);
    });
    
  }
}

module.exports = NotesView;