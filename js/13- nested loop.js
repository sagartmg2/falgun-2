let users = [
    {
        name: "Ram",
        cartItems: [
            { product: "watch", price: 1000 },
            { product: "mouse", price: 500 },
        ],
    },
    {
        name: "Hari",
        cartItems: [
            { product: "keyboard", price: 2000 },
            { product: "mouse", price: 500 },
        ],
    },
    {
        name: "Shyam",
        cartItems: [
            { product: "mousePad", price: 500 },
            { product: "mouse", price: 1000 },
        ],
    },
]

for (let index = 0; index < users.length; index++) {
    let user = users[index]
    let totalAmount = 0 // 1000 + 500

    for (let cartIndex = 0; cartIndex < user.cartItems.length; cartIndex++) {
        let cartItem = user.cartItems[cartIndex]
        totalAmount = totalAmount + cartItem.price
    }

    console.log(`${user.name} has ordered of rs.${totalAmount}`)
}

console.log("end of loop");
/* 
    TODO: expected output
    Ram has ordered of Rs.1000
    Hari has ordered of Rs.2500
    Shyam has ordered of Rs.1500
*/
