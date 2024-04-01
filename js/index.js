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

// login("hari@hari.com", "password") // login successfull
// login("r@r.com", "12345678") // login successfull
// login("r@r.com", "123456") // invalid credentials
// login("alex@gmailcom.com", "123456") // invalid credentials
login("shyam", "password") // login successfulll
login("shyam@shyam.com", "password") // login successfulll
login("shyam123", "password") // invalid createdinals. 
