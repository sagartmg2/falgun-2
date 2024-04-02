let dbUsers = [
    {
        name: "ram",
        email: "r@r.com",
        username: "ram",
        password: "12345678",
    },
    {
        name: "shyam",
        email: "shyam@shyam.com",
        username: "shyam",
        password: "password",
    },
    {
        name: "hari",
        email: "hari@hari.com",
        username: "hari",
        password: "password",
    },
]

const login = (input, inputPassword) => {
    for (let index = 0; index < 3; index++) {
        let selectedUser = dbUsers[index]
        let { email, password, username } = selectedUser
        if ((email == input || username == input) && password === inputPassword) {
            console.log("login success")
            return
        }
    }
    console.log("invalid...")
}

// login("hari@hari.com", "passwordddd")
login("hari", "password")

function findMultiplication(input) {
    let { number, startFrom, endAt } = input
    //TODO:code here
    /* loop here.  */
    for (startFrom; startFrom <= endAt; startFrom++) {
        let result = number * startFrom
        console.log(` ${number} x ${startFrom} = ${result}`)
    }
}

// findMultiplication(5,5,10)
findMultiplication({
    number: 5,
    startFrom: 5,
    endAt: 10,
})

// findMultiplication({
//     number: 10,
//     startFrom: 5,
//     endAt: 10,
// })

/* 
     5 x 5 = 25 
     5 x 6 = 30 
     5 x 7 = 35 
     5 x 8 = 40 
     5 x 9 = 45 
     5 x 10 = 50 
*/


/* asynchronous 
        - donot block other following codes
        - runs in background
*/

setTimeout(showPopup, 0)



/* waiting  for api data  */
for (let index = 0; index < 10000; index++) {
    console.log(index)
}


/* callback functions
        - function passed as an arguement to another function
*/

function showPopup() {
    console.log("popup showd")
}


console.log("show webpage content")


/* research
    callstack.
*/