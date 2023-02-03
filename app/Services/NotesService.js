import { appState } from "../AppState.js"
import { Note } from "../Models/Note.js"
import { Pop } from "../Utils/Pop.js"
import { saveState } from "../Utils/Store.js"




class NotesService {
    updateNotes(updatedBody) {

        // @ts-ignore
        appState.note.description = updatedBody
        
        // @ts-ignore
        appState.note.updated = new Date().toLocaleString()

        saveState('notes', appState.notes)
        Pop.success('Note updated')

        appState.emit('note')
    }

    removeNote(noteId) {
        let note = appState.notes.findIndex(n => n.id == noteId)

        appState.notes.splice(note, 1)
        appState.note = null
        saveState('notes', appState.notes)
        Pop.success('You have successfully removed note!!')
        appState.emit('notes')
        appState.emit('note')
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
        Pop.success('Note File Created!')
    }

 }


export const notesService = new NotesService