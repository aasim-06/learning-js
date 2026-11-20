
 // falsy values.
// false , 0 ,-0 ,  BigInt 0n , " " , null , undefined , NaN.

// truthy values.
// "0",'false', "xyz" , [],{},function(){}


// const useremail = "aasim@123gmai.com"   // for empty string => falsy
// if (useremail){
//     console.log("got the email")
// }
// else{
//     console.log("did not got any email")
// }
const useremail = []                         //output : truthy 
if (useremail){
    console.log("got the email")
}
else{
    console.log("did not got any email")
}

if(useremail.length === 0 ){
    console.log("array is empty")
}
 
const myObject = {}
if(Object.keys(myObject).length === 0){
    console.log("my object is empty")
}

// Nullish Coalescing Operator (??) : null undefined

let value;
// value = 5 ?? 10 
// value = null ?? 10
// value = undefined ?? 5
value = null ?? 15 ?? 10
console.log(value);

// Terniary operator.
//condition ? true : false

const age = 19
age > 18 ? console.log("you are eligible") : console.log("you are not eligible")