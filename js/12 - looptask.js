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

function login(inputEmail, inputPassword) {
    /* code here.  */
}


login("shyam", "password") // login successfulll
login("shyam@shyam.com", "password") // login successfulll
login("shyam123", "password") // invalid createdinals. 
