/*  variables */
/*  data-types*/

/* array
        - index
*/
/* object 
        - key
*/

let product = {
    name: "projector",
    rate: 500000,
}

product.price = product.rate
delete product.rate

console.log(product)

let productApiData = {
    products: [
        { name: "watch", price: 1000 },
        { name: "mouse", price: 1000 },
        { name: "cover", price: 100 },
        { name: "mobile", rate: 100000 }, // convert rate field to price.
    ],
}

productApiData.products[3].price = productApiData.products[3].rate
delete productApiData.products[3].rate

/* wap to calculate sum of two numbers */
/* 
    1 + 2 = 3
    100 + 200 = 300
    50 + 100 = 150
*/

/* template literal / string literal */
/* commment
        ctrl + /
        alt + shift + a    // multi line comments
*/

/* 
    let firstInput = 1
    let secondInput = 2
    let sum = firstInput + secondInput
    // console.log(firstInput + " + " + secondInput + " = ", sum)
    console.log(`${firstInput} + ${secondInput} = ${sum}`)

    let input3 = 100
    let input4 = 300
    let result = input3 + input4
    console.log(input3 + " + " + input4 + " = ", result)

    let input5 = 50
    let input6 = 100
    let result2 = input5 + input6
    console.log(input5 + " + " + input6 + " = ", result2) 

*/

/* 
function
    just like variable, meant to be re -used

    function <functionName>( parameter1, parameter1 ){
        // do something
    }

    calling/run/execute  a function
    
    <functionName>()
    <functionName>()
    <functionName>()

*/

function calculateSum(input1, input2) {
    console.log({ input1: input1 })
    console.log({ input2 })

    let sum = input1 + input2
    console.log(`${input1} + ${input2} = ${sum}`)
}

calculateSum(1, 2) // 1,2
calculateSum(100, 200) // 100,200
calculateSum(50, 100) // 50,100


let todos = [
    {
        title: "html",
        status: "complted",
    },
    {
        title: "css",
        status: "complted",
    },
    {
        title: "js",
        status: "complted",
    },
    {
        title: "react",
        status: "pending",
    },
    {
        title: "express",
        status: "pending",
    },
]


/* 
    html is complted
    css is complted
    js is complted
    react is pending
    express is pending 
*/