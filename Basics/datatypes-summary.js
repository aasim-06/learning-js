// primitive datatype(7 types) :
// string , number , boolean , null , undefined , symbol , BigInt .

const idA = Symbol('123')
const idB = Symbol('123')
console.log(idA === idB);
console.log(typeof(idA))
// symbol represents an unique id .

// Reference (non-premitive) they all actually belong to object, 
// for example function is actually object function.
// array , objects , functions.

// const heros = ["iron-man","thor","spider-man"];

// let my-object{
//     name : "Aasim",
//     age : 20,
// }

// const myFunction = function(){
//     console.log("hello world");
// }




// ############################################################################################ //
// now we are going to learn stack and heap memory allocation in javascript.
// STACK(primitives)=> we get the copy here and HEAP(non-primitives)=> we get the reference(original) here.

let name ="aasim"
let name2 = "name"
name2 = "mohammad aasim"
console.log(name);
console.log(name2);

let user1 ={
    email:"asim@gmail.com",
    password:"1234"
}
let user2 = user1
user2.email ="mohammad@gmail.com"
console.log(user1.email);
console.log(user2.email);
// hence same output for both user1 and user2 because they are reference types and they are
//  pointing to the same object in heap memory.








