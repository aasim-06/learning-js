// var num3 = 300
let num1 = 100 
// thse are global scope.

if (true){
    let num1 = 10
    const num2 = 20
    console.log("innervalue:",num1)
//  var num3 = 30 //it comes out of its Block Scope.
}
console.log(num1);
// console.log(num2);
// console.log(num3);

function one(){
    const username = "aasim"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)
     two()
}
one()

if(true){
    username =  "aasim"
    if (username === "aasim"){
        const website = " google"
        console.log(username + website)
    }
    // console.log(website)

}
console.log(username) 

//################### intresting(mini hoisting) ###################################################//

console.log(addone(5))
function addone(num){
    return num + 1
}

console.log(addtwo(5))  // cant access the addtwo before initialization.
const addtwo = function(num){
    return num + 2
}
