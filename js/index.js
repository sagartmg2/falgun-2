let todos = [
    {
        title: "html",
        status: true,
    },
    {
        title: "css",
        status: true,
    },
    {
        title: "react",
        status: false,
    },
    {
        title: "express",
        status: false,
    },
]

let completedTodos = []
let incompletedTodos = []

todos.forEach((element) => {
    if (element.status) {
        completedTodos.push(element)
    } else {
        incompletedTodos.push(element)
    }
})

let finishedTodos = todos.filter((element) => {
    if (element.status) {
        return true
    }
})

finishedTodos = todos.filter((element) => (element.status ? true : false))
finishedTodos = todos.filter((element) => element.status)

console.log({ completedTodos })
console.log({ finishedTodos })
console.log({ incompletedTodos })

const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"]
const fakeUsers = []

nepaliNames.forEach((name, index) => {
    fakeUsers.push({
        name: name,
        email: name.toLowerCase() + "@gmail.com",
        password: name + index,
    })
})
console.log({ fakeUsers })

/* 
    string function
        "HELL".toLowerCase()
        "   HELL   ".trim()
        "Bearer token".replace("Bearer ","")
*/

/* 
fakeUsers.push({
    name:"arrav",
    email:"araav"+"@gamial.com",
    password:"arrav"+0
})

fakeUsers.push({
    name:"aarya",
    email:"aarya"+"@gamial.com",
    password:"aarya"+1
})

fakeUsers.push({
    name:"aasha",
    email:"aasha"+"@gamial.com",
    password:"aasha"+1
}) */

/* 

TODO: 
    From the above array create an new array of users with email and password 


    OUTPUT should be like following
    [
        { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
        { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
        { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
        { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    ] 

*/

let numbers = [10, 5, 4, 3, 1, 6, 7]
let oddNumbers = []
numbers.forEach((number) => {
    /* 
        if (number % 2 == 0) {
        } else {
            oddNumbers.push(number)
        } 
    */

    if (number % 2 !== 0) {
        oddNumbers.push(number)
    }
})

let evenNumbers = numbers.filter((element) => {
    if (element % 2 === 0) {
        return true
    }
})
evenNumbers = numbers.filter((element) => (element % 2 === 0 ? true : false))
evenNumbers = numbers.filter((element) => element % 2 === 0)

console.log({ evenNumbers })

let dobule = (input) => {
    return input * 2
}

dobule = (input) => input * 2

numbers = [10, 5, 4]

let doubledNumbers = []
numbers.forEach((el) => {
    doubledNumbers.push(el * 2)
})

doubledNumbers = numbers.map((el) => {
    return el * 2
})

doubledNumbers = numbers.map((el) => el * 2)

console.log(doubledNumbers)
