/* logical operatrs
     - AND  &&
     - OR   ||  any one of the condition can be true
     - NOT  ! 
     */

let student = {
    name: "Ram",
    paid: false,
    hasScholoarship: false,
    previousBatch: true,
}

/* object destructuring */
let { paid, hasScholoarship, previousBatch } = student

/* 
        if (paid) {
            console.log("can give")
        } else if (hasScholoarship) {
            console.log("can give")
        } else {
            console.log("cant give.")
        } 
    */

if (paid || hasScholoarship || previousBatch) {
    console.log("can give")
} else {
    console.log("cant give.")
}
