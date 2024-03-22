/* object  */
/* array  */

let brand = {
    name: "samsung",
    founders: [
        { name: "wrong-ceo", phone: 11 },
        { name: "abc", phone: 22, address: "usa" },
    ],
    website: "https://www.sam",
}

console.log(brand.estd)
brand.estd = 1985
console.log(brand.estd)
console.log(brand.founders[0].address)
brand.founders[0].address = "korea"
console.log(brand)

// console.log(brand.founders[0].name)
// brand.founders[0].name = "right-name"
// console.log(brand)

let brands = [
    {
        name: "samsung",
        founders: [
            { name: "wrong-ceo", phone: 1111 },
            // change wrong-ceo to right-ceo
            // add address field in about ceo's
        ],
    },
    {
        name: "apple",
        founders: [
            { name: "abc", phone: 222 },
            { name: "xyz", phone: 333 },
        ],
    },
]

/* code here: 
    TODO: change wrong ceo of samsung to right-ceo
*/

console.log(brands[0].founders[0].name)
brands[0].founders[0].name = "right-ceo" // code to update exising
brands[0].founders[0].address = "korea" // code to add new property
console.log(brands)



/* reference data types */

let user1 = {
    name: "Ram",
    age: 10,
}

let user2 = user1
user2.name = "shyam"

console.log(user1);
console.log(user2);
