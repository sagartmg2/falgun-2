/* varaibles */
/* let vs const */
/* data types -- string,number,boolean,undefined,null , array,object */

/* array
        - collections of similar data types
        - index: alwasys starts with 0
        - each item is known as elements
*/

/* object */

// let courses = "web","qa","
let course1 = "web"
let course2 = "qa"
let course3 = "python"
let courses = ["web", "qa", "python", "graphic"]

/* code here.  */
console.log(courses)

courses[1] = "quality assurance"
courses[3] = "graphic desinging"

console.log(courses)

let color1 = "Red"
let color1Hex = "#FF000"
let color1RGB = "rgb(255,0,0)"

let color2 = "white"
let color3 = "orange"

let colors = ["orange", "#FF0000"]
console.log("prev-colors-2", colors[2])
colors[2] = "black"
console.log("after-colors-2", colors[2])

// let nubmers = [1, 2, "three", 4, "five"] // wrong

let course = "web"
course = {
    title: "web",
    title: "mern",
    duration: 1, // change this to 3
    durationUnit: "months",
    startTime: 0, // chnage this to 3
    endTime: 4,
}

console.log("prev-duration", course.duration)
console.log("prev-starttime", course["startTime"])

course.duration = 3
course["startTime"] = 3

console.log("after", course.duration)
console.log("after-starttime", course["startTime"])

console.log("prev-course-fee", course.fee) // undefined
course.fee = 15000 // sets new key/property called fee
console.log("after-course-fee", course.fee)

let filedToBeChange = "endTime"
console.log("end-time", course["endTime"])
console.log("end-time", course[filedToBeChange])

/* nested object */

let user = {
    name: "ram",
    // phones: [982423, 90723423],
    // phone:{
    //     ncell:2423,
    //     ntc:234,
    // },
    // phone: {
    //     ncells: [234, 234],
    //     ntc: 234,
    // },
    phones: [
        {
            number: 988234,
            provider: "ntc",
        },
        {
            number: 9864,
            provider: "ntc",
        },
        {
            number: 97234,
            provider: "ncell",
        },
    ],
    address: {
        permanentAddress: {
            ward: 1,
            district: "bhaktapur",
        },
        temporaryAddress: {
            ward: 16,
            district: "kathmadu",
        },
    },
}

console.log(user)

let brands = [] // can change here. 

console.log(brands) // detail infromation of multiple brands



