import { generateId } from "../Utils/generateId.js"

export class Note { 
    constructor(data){
        this.id = data.id || generateId()
        this.title = data.title
        this.description = data.description || ''
        this.color = data.color
        this.created = data.created || ''
        this.updated = data.updated || 'Not updated yet'
    }

    get noteTemplate(){
        return`
        <div class="d-flex align-items-center my-2 my-3 justify-content-center bg-dark selectable">
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
              <h1>${this.title.toUpperCase()} <span class="shadow" style="color: ${this.color};">&#187;</span></h1>
            </div>
            <div class="col-2 fs-1 text-light"><i class="mdi mdi-delete bg-danger rounded-circle selectable" onclick="app.notesController.removeNote('${this.id}')"></i></div>
        </div>
        <div class="row text-light mt-3">
            <div class="col-3">
              <div class="row">
                <div class="col-12">
                  Created: ${this.created}
                </div>
                <div class="col-12">
                  Update: ${this.updated}
                </div>
              </div>
            </div>
            <div class="col-9">
              <div>
                <textarea name="description" id="body" placeholder="Notes go here..." onblur="app.notesController.updateNotes()">${this.description}</textarea>
              </div>
        </div>`
    }

    static defaultTemplate(){
        return `
        <div class="row">
            <div class="col-10 text-light">
              <h1>Select a note or create a new note to get Started</h1>
            </div>
          </div>
          <div class="row text-light mt-3">
            <div class="col-9 offset-2">
              <div>
                <textarea cols="80" rows="10" placeholder="Notes go here..." disabled>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</textarea>
              </div>
            </div>
            `
    }
}

// onclick='app.notesController.setPrimaryNote('${this.id}'