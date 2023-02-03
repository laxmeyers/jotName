import { generateId } from "../Utils/generateId.js"

export class Note { 
    constructor(data){
        this.id = data.id || generateId()
        this.title = data.title
        this.description = data.description || ''
        this.color = data.color
    }

    get noteTemplate(){
        return`
        <div class="d-flex align-items-center my-2 my-3 justify-content-around bg-dark selectable" onclick='app.notesController.setPrimaryNote('${this.id}')'>
        <div class="text-light d-flex align-items-center">
        <h1 class="fs-2 pe-3">${this.title}</h1>
        <p class="fw-bold fs-1" style="color: ${this.color};">&#187;</p>
        </div>
        <div class='ps-5'><i class='text-danger fw-bolder fs-1 mdi mdi-delete ' onclick='app.notesController.delete('${this.id}')'></i></div>
        </div>`
    }
}
