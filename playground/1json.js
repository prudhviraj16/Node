const fs = require('fs')

// const book = {
//     title : 'Ego is the enemy',
//     author : 'Ryan Holiday',
// }
// const Book = JSON.stringify(book)
// const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer.toString())

const event = {
    name : 'Birthday Party',
    guestList : ['Andrew', 'Jen', 'Mike'],
    printGuestList(){
        console.log('Guest list for '+this.name)

        this.guestList.forEach((guest) => {
            console.log(guest+ ' is attending '+ this.name)
        })
    }
}

event.printGuestList()