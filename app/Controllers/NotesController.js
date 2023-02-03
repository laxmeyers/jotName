import { appState } from "../AppState.js";
import { notesService } from "../Services/NotesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";


function _drawFolder(){
    let notes = appState.notes
    let template = ''
    
    notes.forEach(n => template += n.noteTemplate)

    setHTML('notes', template)
}

function _drawNote(){
    let note = appState.note

    // setHTML('note', )
}

function _notesCount(){
    setText('notes-count', `Total Notes: ${appState.notes.length}`)
}

export class NotesController {
    constructor(){
        _drawFolder()
        _notesCount()
        appState.on('notes', _notesCount)
        appState.on('notes', _drawFolder)
        // console.log("notes controller");
    }

    createNewNote(){
        try {
            // @ts-ignore
            window.event.preventDefault()
            
            // @ts-ignore
            let form = window.event.target

            let formData = getFormData(form)
            notesService.createNewNote(formData)
            // @ts-ignore
            form.reset()
        } catch (error) {
            Pop.error(error)
        }
    }

    setPrimaryNote(noteId){
        console.log("set");
        try {
            notesService.setPrimaryNote(noteId)
        } catch (error) {
            Pop.error(error)
        }
    }
}
