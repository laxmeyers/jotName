import { appState } from "../AppState.js";
import { notesService } from "../Services/NotesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawFolder(){
    let notes = appState.notes
    let template = ''
    
    notes.forEach(n => template += n.noteTemplate)

    setHTML('notes', template)
}

export class NotesController {
    constructor(){
        _drawFolder()
        appState.on('notes', _drawFolder)
        console.log("notes controller");
    }

    createNewNote(){
        try {
            window.event?.preventDefault
            
            let form = event?.target

            let formData = getFormData(form)
            notesService.createNewNote(formData)
        } catch (error) {
            Pop.error(error)
        }
    }

    setPrimaryNote(noteId){
        try {
            notesService.setPrimaryNote(noteId)
        } catch (error) {
            Pop.error(error)
        }
    }
}
