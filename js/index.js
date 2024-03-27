/* array,objects */
/* functions */
/* 
    console.log(`${2} * 2 = ${2 * 2}`)
    console.log(`${3} * 2 = ${3 * 2}`)
    console.log(`${4} * 2 = ${4 * 2}`)
 */

function double(input) {
    let output = input * 2
    // console.log(`${input} * 2 = ${output}`)
    return output
}

let doubleValue = double(4)
console.log({ doubleValue })

console.log(double(100))
console.log(double(111))

/* to check data types */
let type = typeof 12
console.log(type)
console.log(typeof true)

let user1 = {
    firstName: "ram",
    middleName: "bdr",
    lastName: "sharma",
}
let user2 = {
    firstName: "hari",
    middleName: "bdr",
    lastName: "sharma",
}

function getFullName(userObj) {
    return `${userObj.firstName} ${userObj.middleName} ${userObj.lastName} `
}

console.log(getFullName(user1))
console.log(getFullName(user2))

/* arrow function */
const makeFullName = (userObj) => {
    return `${userObj.firstName} ${userObj.middleName} ${userObj.lastName} `
}

console.log(makeFullName(user1))
console.log(makeFullName(user2))

const triple = (input) => {
    return input * 3
}

const quadraple = (input) => input * 4

const sum = (firstInput, secondInput) => {
    return firstInput + secondInput
}

const diff = (firstInput, secondInput) => firstInput - secondInput

console.log(triple(111))
console.log(quadraple(111))

let users = ["ram", "hari", "shyam", "sita"]
console.log(users[0])
console.log(users[1])
console.log(users[2])
console.log(users[3])

/* conditional statements */
/* if else 

    syntax
        if( <condition> ){
            // for truthy condition 
        }else{
           //  for false condition
        }

*/

let willRain = true
let hasProbability = false

if (willRain) {
    console.log("take umbrealla")
} else {
    if (hasProbability) {
        console.log("you may need it. ")
    } else {
        console.log("no need")
    }
}


if (willRain) {
    console.log("take umbrealla")
} else if (hasProbability) {
    console.log("you may need it. ")
} else {
    console.log("no need")
}




let topics = [
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
]

/* 
    html is complted
    css is complted
    react is pending 
*/

/* 
    operators
*/

/* reserach */
/* object destrcturing */
/* block scope */
/* ternary operator */
