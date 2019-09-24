  let button = document.getElementById("btn_add_notes");
  button.addEventListener("click", () => {

    let notesDiv = document.querySelector(".canvas-notes-container");
    notesDiv.innerHTML = " <%= j render 'canvases/note_form', canvas: @canvas %>"
})

 let addTitle = document.getElementById("add-canvas-title");
    addTitle.addEventListener("click", () => {
      let form = document.querySelector(".title-form");
      form.classList.toggle("d-none")
})

 let addPhoto = document.getElementById("add-canvas-photo");
    addPhoto.addEventListener("click", () => {
      let form = document.querySelector(".photo-form");
      form.classList.toggle("d-none")
})

  if(window.location.pathname.includes("update_name")){
    let update_title_btn = document.querySelector("#add-canvas-title");
    update_title_btn.click();
  }
