const library = [
    {
        title: "book keeping",
        author: "morrisel",
        status: {
            own: true,
            reading: false,
            read: false
        }
    }, 

    {
        title: "Rockets",
        author: "princess",
        status: {
            own: false,
            reading: true,
            read: true
        }
    },

    {
        title: "Industrial Revolution",
        author: "cessa",
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
]

library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

const {title: firstBook} = library[0]

const libraryJSON = JSON.stringify(library)
console.log(libraryJSON)