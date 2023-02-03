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

    setHTML('description', note?.descriptionTemplate)
}

function _notesCount(){
    setText('notes-count', `Total Notes: ${appState.notes.length}`)
}

export class NotesController {
    constructor(){
        _drawFolder()
        _notesCount()
        // _drawNote()
        appState.on('note', _drawNote)
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

    async removeNote(noteId){
        try {
            let yes = await Pop.confirm("you sure you want to delete this Note?")
            if(!yes){
                return
            }
            notesService.removeNote(noteId)
        } catch (error) {
            Pop.error(error)
        }
    }

    updateNotes(){
        try {
            let textArea = document.getElementById('body')
            // @ts-ignore
            let updatedBody = textArea.value
            notesService.updateNotes(updatedBody)
        } catch (error) {
            Pop.error(error)
        }
    }
}
