import { appState } from "../AppState.js"
import { Note } from "../Models/Note.js"
import { saveState } from "../Utils/Store.js"




class NotesService {
    setPrimaryNote(noteId) {
        throw new Error("Method not implemented.")
    }
    createNewNote(formData) {
        let note = new Note(formData)

        appState.notes.push(note)
        appState.emit('notes')

        saveState('notes', appState.notes)
    }

 }


export const notesService = new NotesService