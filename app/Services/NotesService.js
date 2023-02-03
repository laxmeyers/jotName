import { appState } from "../AppState.js"
import { Note } from "../Models/Note.js"
import { saveState } from "../Utils/Store.js"




class NotesService {
    updateNotes(updatedBody) {

        appState.note.description = updatedBody
        
        appState.note.updated = new Date().toLocaleString()

        saveState('notes', appState.notes)

        appState.emit('note')
    }

    removeNote(noteId) {
        let note = appState.notes.findIndex(n => n.id == noteId)

        appState.notes.splice(note, 1)
        appState.emit('notes')
    }

    setPrimaryNote(noteId) {
        let note = appState.notes.find(n => n.id == noteId)

        // @ts-ignore
        appState.note = note
        appState.emit('note')
    }

    createNewNote(formData) {
        let note = new Note(formData)
        let check = appState.notes.find(n => n.title.toLowerCase() == note.title.toLowerCase())

        if(check){
            throw new Error(`Title ${note.title} already exists`)
        }

        note.created = new Date().toLocaleString()

        appState.notes.push(note)
        appState.emit('notes')

        saveState('notes', appState.notes)
    }

 }


export const notesService = new NotesService