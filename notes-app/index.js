const yargs = require("yargs");

const getNotes = require('./utils') 

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder : {
    title : {
        demandOption : true,
        type : 'string'
    },
    body : {
        demandOption : true,
        type : 'string'
    }
  },   
  handler: function (argv) {
      getNotes.addNote(argv.title, argv.body)
  },
})

yargs.command({
  command: "remove",
  describe: "Remove a new note",
  handler: function (argv) {
      getNotes.removeNotes(argv.title)
  },
})

yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
      getNotes.listNotes()
  },
})

yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function (argv) {
    getNotes.readNotes(argv.title)
},
})


yargs.parse()