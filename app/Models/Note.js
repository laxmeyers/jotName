import { generateId } from "../Utils/generateId.js"

export class Note { 
    constructor(data){
        this.id = data.id || generateId()
        this.title = data.title
        this.description = data.description || ''
        this.color = data.color
        this.created = data.created || ''
        this.updated = data.updated || ''
    }

    get noteTemplate(){
        return`
        <div class="d-flex align-items-center my-2 my-3 justify-content-center bg-dark selectable")'>
        <div class="text-light d-flex align-items-center ps-3" onclick='app.notesController.setPrimaryNote("${this.id}")'>
        <h1 class="fs-2 pe-3">${this.title}</h1>
        <p class="fw-bold fs-1 shadow" style="color: ${this.color};">&#187;</p>
        </div>
        </div>`
    }

    get descriptionTemplate(){
        return`
        <div class="row">
            <div class="col-10 text-light">
              <h1>${this.title.toUpperCase()}</h1>
            </div>
            <div class="col-2 fs-1 text-light"><i class="mdi mdi-delete bg-danger rounded-circle" onclick="app.notesController.removeNote('${this.id}')"></i></div>
          </div>
          <div class="row text-light mt-3">
            <div class="col-3">
              <div class="row">
                <div class="col-12">
                  created on such date
                </div>
                <div class="col-12">
                  updated on certain day
                </div>
              </div>
            </div>
            <div class="col-9">
              <div>
                <textarea name="description" id="description" placeholder="Notes go here..."></textarea>
              </div>
            </div>`
    }
}

// onclick='app.notesController.setPrimaryNote('${this.id}'