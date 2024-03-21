/* variables  */
/* var vs let vs const */
/* delcartion vs initialization */

/*  primitive data types
    string
    number
    boolean
    undefined
    null
*/
/*  non-primitive data types ( collections )
    array 
    object
*/

// let brand = "apple","samsung"  wrong
// let brands = "apple,samsung" wrong

let brand1 = "apple"
let brand2 = "samsung"
let brand3 = "abc"
let brand4 = "xyz"

console.log(brand1)
console.log(brand2)

let courseTitle = "python"
console.log(courseTitle)

courseTitle = "web" // re-initialize
courseTitle = "mern" // re-initialize

console.log("course:", courseTitle)

/* Array
    - elements // each item in array is known as element
    - index
        - always starts with 0
    - usually its collection of similar data types

*/

let brands = ["app", "samsung", "lg", "soni"] // change soni to sony
console.log(brands)

console.log("prev", brands[0])
brands[0] = "apple"
console.log("after", brands[0])
console.log("before-3", brands[3])
brands[3] = "sony"
console.log("after-3", brands[3])

let course1 = "python"
let course2 = "qa"
let course3 = "web"

let courses = [course1, course2, course3, "graphic", "ai"] // change ai to artificial intelligence
courses[4] = "artificial intelligence"
courses[5] = "machine learnign"

let a = 1
let grade = 1
let color

console.log(a)
console.log(grade)
console.log(courseTitle)
console.log("courses", courses)
console.log("courses[4]", courses[4])
console.log("courses[5]", courses[5])
console.log("color", color)

let companyies = ["mindrisers", "https:mindris.com.np", "xyz", 2018, true]

console.log(companyies)

let companyTitle = "mindrisers"
let companyUrl = "https://mindrisers"
let companyCeo = "xyz"

/* other possible fields = estd, reception, frontendHead, backendHead */

/* object
    let <variableName> = {
        <key>:<value>,
        <attribute>:<value>,
        <propertry>:<value>,
        <filed>:<value>,
    }
*/

let company = {
  title: "mindrisers",
  title: "mindrisers consortium",
  url: "https://wrong.com",
  ceo: "mr ram",
  Ceo: "mr hari",
  estd: 2018,
  isOpen: true,
}


/* code here 
    TODO: change compnay url to https://correct.com
*/

let projectorBrand = "viewsonic"
let projectorColor = "white"
let projectorPrice = 50000

let projector = {
  brand: "viewsonic",
  color: "white",
  price: 50000,
}

console.log("company", company)
console.log("projector", projector)
