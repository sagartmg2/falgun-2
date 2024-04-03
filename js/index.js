/* arrow  functions */
/* array realted functions
     push
     pop
     unshift
     shift
     splice


     doesnot change original array.
     slice
     array.forEach
     array.filter
     array.map

*/

let numbers = [4, 5, 3, 2]
numbers[4] = 1 //  [4, 5, 3, 2,1]
numbers.push(0)
console.log(numbers)
numbers.pop()
console.log(numbers)

let brands = ["apple", "lg", "sony", "panasonic"]
brands.splice(1, 2) // ["apple", "panasonic"]
brands.splice(1, 0, "samsung")

console.log(brands)

let colors = ["Red", "green", "orange", "black"]
let newColors = colors.slice(1, 4)
console.log({ colors })
console.log({ newColors })

/* callback function
        - 
*/

const showPopup = () => {
    console.log("show popup")
}

setTimeout(showPopup, 2000)
setTimeout(() => {
    console.log("show another popup")
}, 3000)

let names = ["ram", "abc", "xyz", "ijk"]

/* 
for (let index = 0; index < names.length; index++) {
    const element = names[index]
    console.log(element)
}
 */

names.forEach((element, index) => {
    console.log("index -", index, element)
})

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
let completedTodos  = []

completedTodos.push({
    title: "html",
    status: true,
})

console.log({completedTodos});



/* 
todos.forEach((element) =>{
    let {title,status}  = element
    if(status){
        console.log(`${title} is compoleted`);
    }else{
        console.log(`${title} is pending`);
    }
}) */

todos.forEach((element) => {
    let { title, status } = element
    console.log(`${title} is ${status ? "complted" : "pendng"}`)
})



const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"]
const fakeUsers = []


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
