// challenge 1

const people = [
    {
        firstName: 'John',
        lastName: 'boo',
        Email: 'john@gmail.com',
        phone: '222-22-2222',
        age: 30,
    },

    {
        firstName: 'Jane',
        lastName: 'Poe',
        Email: 'jane@gmail.com',
        phone: '111-11-1111',
        age: 25,
    },
    {
        firstName: 'Bob',
        lastName: 'foe',
        Email: 'Bob@gmail.com',
        phone: '333-11-1111',
        age: 45,
    },
    {
        firstName: 'Sara',
        lastName: 'Soe',
        Email: 'Sara@gmail.com',
        phone: '444-11-1111',
        age: 19,
    },
    {
        firstName: 'Josh',
        lastName: 'Koc',
        Email: 'jose@gmail.com',
        phone: '555-11-1111',
        age: 23,
    }
]

const youngPeople = people.filter((youngPerson) => (youngPerson.age > 25 && youngPerson ))

const eachPerson = youngPeople.map((each) => ({name: each.firstName + " " + each.lastName, email: each.Email}))

// console.log(eachPerson)


// challenge 2

const numbers = [2, -30, 50, 20, -12, -9, 7]

const positiveNumbers = numbers
     .filter((num) => (num > 0))
     .reduce((acc, curr) => (acc + curr), 0)
    //   console.log(positiveNumbers)

    // challenge 3

    const toCap = (word) => {
        const firstWord = word.slice(0, 1)
        const newCap = firstWord.toUpperCase()
     
        const otherWords = word.slice(1)
     
        const joinedWord = newCap + "" + otherWords
     
        return joinedWord
     }

      const words = ['corder', 'programmer', 'developer']
      const capitalizedWords = words.map((each) => toCap(each))

      console.log(capitalizedWords)