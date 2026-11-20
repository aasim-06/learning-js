// we use this in objects to refer the current context.
const user = {
    username : "aasim",
    age : 20,
    welcomeMessage : function(){
        console.log(`${this.username} welcome to website `);
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "muneeb"
// user.welcomeMessage()

console.log(this) // output = empty object , bcz there is no global object. 


// the biggest global object in browser is window object//

// function chai(){
//     let myname = "hazim"
//     console.log(this.myname) //output : undefined 
// }
// chai()


let chai =  () => {
    let myname = "hazim"
    console.log(this.myname) //output : undefined 
}
chai()

// ### arrow function #### (input) => (output)or{output}  //
 
// basic arrow function(explicite)
let multiply = (x,y) => {return x*y}
console.log(multiply(3,4));

// implicite return arrow function.

let divide = (x,y) => ( x/y)
console.log(divide(100,5))

const car = () => ({mycar :"porche"}) //it is mandotory to put object into parenthesis.
console.log(car());