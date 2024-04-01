/* operators
     === // strict equality operator


    logical operators
     &&  // && gets more priority
     ||   

*/

let user1 = {
    name: "ram",
    email: "r@r.com",
    password: "12345678",
}
let user2 = {
    name: "hari",
    email: "hari@hari.com",
    password: "password",
}

function login(user, inputEmail, inputPassword) {
    if (user.email === inputEmail && user.password === inputPassword) {
        console.log("sucessful")
    } else {
        console.log("invalid ....")
    }
}

login(user1, "r@r.com", "12345678") // login successfull
login(user1, "r@r.com", "123456") // invalid credentials
login(user2, "hari@hari.com", "password") // login successfull

/* loop
        for 
        while
        doWhile
*/

let todos = [
    {
        title: "html",
        status: "pending",
        cratedBy: "2023-01-234",
    },
    {
        title: "css",
        status: "complted",
        cratedBy: "2023-01-234",
    },
    {
        title: "react",
        status: "pending",
        cratedBy: "2023-01-234",
    },
    {
        title: "express",
        status: "pending",
        cratedBy: "2023-01-234",
    },
]

function printStatus(index) {
    console.log(`${todos[index].title} is ${todos[index].status}`)
}

// printStatus(0)
// printStatus(1)
// printStatus(2)
// printStatus(3)

/* 
    sytanx of for loop

    for ( <initalPoint>; <condition>; <modifier>){
        // do something
    }
*/

/* for (let index = 0; index < 4; index++) {
    console.log("do somehting for index", index)
    printStatus(index)
} */

for (let index = 0; index < 4; index++) {
    console.log("do somehting for index", index)
    console.log(`${todos[index].title} is ${todos[index].status}`)
}

console.log("end of loop")





