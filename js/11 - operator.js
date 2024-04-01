/* logical operatrs
     - AND  &&
     - OR   ||  any one of the condition can be true
     - NOT  ! 
     */

let name = "ram"

let student = {
    name: "Ram",
    paid: false,
    hasScholoarship: true,
    hasMetAttendance: false,
}

/* object destructuring */
let { paid, hasScholoarship, hasMetAttendance } = student

/* 
    if (paid) {
        console.log("can give")
    } else if (hasScholoarship) {
        console.log("can give")
    } else {
        console.log("cant give.")
    } 
*/

/* in react ternary operator: must have. */
console.log(`ram can / cant give exam`)
console.log(`ram ${paid ? "can" : "cant"} give exam`)
console.log(`ram ${paid || hasScholoarship ? "can" : "cant"} give exam`)
console.log(
    `ram ${
        (paid || hasScholoarship) && hasMetAttendance ? "can" : "cant"
    } give exam`
)

//  wrong // use if-else
// (paid || hasScholoarship) ? console.log("can give") : console.log("cnat give");

/* 

if (hasMetAttendance && paid || hasScholoarship) {
    // if (false && false || true  ) {  
    // if (false || true  ) { // AND get higher priority
    console.log("can give")
} else {
    console.log("cant give.")
}


 */

if (hasMetAttendance && (paid || hasScholoarship)) {
    // if (hasMetAttendance && (false || true) ) {
    console.log("can give")
} else {
    console.log("cant give.")
}

// ternary operator ?

console.log("ram" || "hari") // ram
console.log("" || "hari") // hari

let products = [
    {
        name: "watch",
        image: null,
    },
    {
        name: "mobile",
        image: "https://image.com",
    },
]
