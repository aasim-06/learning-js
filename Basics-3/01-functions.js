function myname() {
    console.log("A");
    console.log("a");
    console.log("s");
    console.log("i");
    console.log("m");
}
// myname()


function square(x){
    console.log(x**2);
}
// square(5)



// function areaOfRect(length,breadth){
//     console.log(length*breadth);
// }
// areaOfRect(5,"10"); // as we have already disscused the opreations on numbers.

function areaOfRect(length,breadth){
//    let result = length*breadth
//    return result
      return length*breadth // after return nothing is valid.
}                             
const result = areaOfRect(5,10)
// console.log("Area of your rectangle is :",result);
// here is another way of writing.
function areaOfRect(length,breadth){
      return length*breadth
}   
// console.log("area of your rectangle is :", areaOfRect(5,10));


function userlogin(username = "aasim"){         // if we set an default value it will not go to if statement.
    if (username === undefined ){
        console.log("please enter your username");
        return
    }
    return `${username} just loggen in`
}
console.log(userlogin("mohammad aasim")) // this overides the default value.


function marks(...numbers){
    return numbers
}
function marks(sub1,sub2, ...numbers){
    return numbers
}
// console.log(marks(98,99,95,92,100));

const user = {
    name: "aasim",
    rollnum : 11262200
}
const student ={
    name : "mohammad aasim",
    rollnum : 11262211
}
function youreObject(myobject){
    console.log(`my name is ${myobject.name} and my roll num is ${myobject.rollnum}`);
}
youreObject(user)
// or we can just simply put the value in handleObject,after creating the function.
// youreObject({ name : "aasim",rollnum : 11262200})


const abcd = [100 , 200 , 300 , 400 ]
function myabcd(Score){
    return Score[2]
}
console.log(abcd);
// console.log(myabcd([100, 200 , 300 , 400 ,500 ]));
