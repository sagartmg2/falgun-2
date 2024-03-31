/* function , return , arrow function */
/* oeprators
     ++ 
     += 
     % 
     == 
     === strict equality operator
     falsy 
         - NaN
         - undefined
         - empty strng ""
         - false 
         - null
         - 0

    
    logical operatrs
     - AND  &&
     - OR   ||
     - NOT  !

 */

let student = {
    name: "Ram",
    paid: true,
    hasScholoarship: true,
    hasMetAttendance: false,
}


/* solution one */
if (student.paid) {
    if (student.hasMetAttendance) {
        console.log("he can  give exam")
    } else {
        console.log("hecant ")
    }
} else {
    if (student.hasScholoarship) {
        if (student.hasMetAttendance) {
            console.log("he can  give exam")
        } else {
            console.log("he can not  give exam")
        }
    } else {
        console.log("he can not  give exam")
    }
}


/* solution two  */
if (student.hasMetAttendance) {
    if (student.paid) {
        console.log("he can  give exam")
    } else {
        if (student.hasScholoarship) {
            console.log("he can  give exam")
        } else {
            console.log("he can not  give exam")
        }
    }
} else {
    console.log("he can not  give exam")
}





