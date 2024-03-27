/* array,object */
/* functions
        - reusable.
 */

/* comments
    ctrl + /
    alt + shift + a    

*/

/**
 * function which print dobule of input
 * @param {number} input
 */
function double(input) {
    console.log(`${input} * 2 = ${input * 2}`)
}

double(100)
double(200)
double(400)


let colors = [
    {
        name:"red",
        hexValue:"#FFEE00",
    }
]


let todos = [
    {
        title: "html",
        status: "pending",
    },
    {
        title: "css",
        status: "complted",
    },
    {
        title: "react",
        status: "pending",
    },
    {
        title: "express",
        status: "pending",
    },
]

/* 
    console.log(`${todos[0].title} is ${todos[0].status}`)
    console.log(`${todos[1].title} is ${todos[1].status}`)
    console.log(`${todos[2].title} is ${todos[2].status}`)
    console.log(`${todos[3].title} is ${todos[3].status}`)
 */

function printStatus(index) {
    console.log(`${todos[index].title} is ${todos[index].status}`)
}

printStatus(0)
printStatus(1)
printStatus(2)
printStatus(3)

function printTodoInfo(todo) {
    console.log(`${todo.title} is ${todo.status}`)
}

printTodoInfo(todos[0])
printTodoInfo({ name: "css", status: "complted" })
printTodoInfo(todos[2])
printTodoInfo(todos[3])

function greet(name) {
    console.log(`hello ${name}`)
}

greet("ram")
greet("sita")
greet("hari")

/* sum(100,200) */
console.log("ram", "sita", "hari")

function activate() {
    console.log("acivate")
}

let user = {
    name: "ram",
    login: function login() {
        console.log("logged in ")
    },
    logout: function () {
        console.log("logged out ")
    },
    activate,
    deActivate: () =>{
        console.log("user deactivated");
    }
}

console.log(user.name)
user.login()
user.logout()
user.signOut  = user.logout
user.signOut()
user.activate()

/* 
    let console = {
        log: function(){
            
        }
    }
 */


    /* 
        research
        - arrow function
        - return

        loop
            - for loop
        
            
        array functions
        .forEach
        .map
        .filter

    */


function sum(inpu1,inpu2){

}

const calculateSum = (inpu1,inpu2) =>{  }