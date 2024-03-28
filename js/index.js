/* function */
/* arrow function */
/* return in  function */
/* if else */

// const login = () => {
//     console.log(this);
//     console.log("logged in")
// }

function login() {
    // console.log(this);
    console.log(this.name, "logged in")
}

let users = [
    { name: "ram", login: login },
    { name: "hari", login: login },
]

users[0].login()
users[1].login()

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

/* falsy values */
let ourCondition = false
ourCondition = 0
ourCondition = ""
ourCondition = null
ourCondition = undefined
ourCondition = NaN

/* 
    except these above 6, all are considered positive value in javascript
    ourCondition = []
    ourCondition = {}
*/

if (ourCondition) {
    console.log("+ve value")
} else {
    console.log("neagative value")
}

/* falsy values in javascript
     - false
     - 0

*/

/* 
    if (topics[0].status) {
        console.log(`${topics[0].title} is completed`)
    } else {
        console.log(`${topics[0].title} is pending`)
    }

    if (topics[2].status) {
        console.log(`${topics[2].title} is completed`)
    } else {
        console.log(`${topics[2].title} is pending`)
    }
 */

const checkStatus = (topic) => {
    /* object destructuring */
    let { status, title } = topic

    // if (topic.status) {
    //     console.log(`${topic.title} is completed`)
    // } else {
    //     console.log(`${topic.title} is pending`)
    // }

    if (status) {
        console.log(`${title} is completed`)
    } else {
        console.log(`${title} is pending`)
    }
}

checkStatus({
    title: "html",
    status: true,
})
checkStatus(topics[0])
checkStatus(topics[1])
checkStatus(topics[2])

/* 
        html is complted
        css is complted
        react is pending 
    */

/* 
    research optional
    - global execution context
    - call stack
    - hoisting

    
    // required
    - falsy values in js
 */

/* global scope */
let brand = "apple"

console.log(double(2))
function double(input) {
    let result = input * 2
    return result
}

const triple = (input) => {
    let result = input * 3
    return result
}
console.log(triple(111))

if (true) {
    let data = "api data"
    console.log({ data })
}

if (true) {
    const data = "api data 2"
    console.log({ data })
}

if (true) {
    /* this data variable is a block scope varirable   */
    const data = "api data 3"
}

/* we cannot access block scope varialbe outside the scope */
console.log({ data })

/* operators
    logical operators
     
*/

