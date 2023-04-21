const fs = require('fs');

const getNotes = () => { 
    return 'Your notes...' 
} 

const addNote = (title,body) => {

    const notes = loadNotes()

    const duplicateNotes = notes.filter(note => note.title === title)

    debugger 
    
    if(duplicateNotes.length===0){
        notes.push({
            title : title,
            body : body
        })
        savedNotes(notes)
        console.log("Notes is being added")
    }else{
        console.log("Notes title already taken")
    }

}

const savedNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
    
}

const removeNotes = (title) => {
    try{
        const notes = loadNotes()
        const filterNotes = notes.filter(note => note.title !==title)
        const dataJSON = JSON.stringify(filterNotes)
        fs.writeFileSync('notes.json', dataJSON)
    }
    catch(e){
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNotes = (title) => {
    const notes = loadNotes()
    const filterNotes = notes.filter(note => note.title ===title)
    console.log(filterNotes[0].body)
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNotes : readNotes
}