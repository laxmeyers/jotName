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
}

// onclick='app.notesController.setPrimaryNote('${this.id}'