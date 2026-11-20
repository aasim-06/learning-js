// ####################### objects(important) ########################## //

//singleton object
// object.create

// object literal(key value pair) => we can have any datatype as value in object but key is converted to string automatically.
const mysym = Symbol("id1")

const jsUser = {
    name : "aasim",
   "fullName": "mohammad aasim",
    [mysym] :"myid1",
    email : "asim@gmail.com",
    age : 20,
    isLoggedIn : false,
    lastLoginDays : ["monday", "saturday"]
}
console.log(jsUser.email);
console.log(jsUser["email"]); //this is better way ,bcz if we have key in string form we cant access it using dot notation.
console.log(jsUser["fullName"]); // this is the only way to access the key which is in string form.
console.log(jsUser[mysym]); // this is the way to access the key which is a symbol.

console.log(jsUser.email = "ratheraasim@gmail.com"); 
console.log(jsUser.fullName = "mohammad aasim rather");// we can change the value of key using dot notation.
console.log(jsUser.mysym = "mynewid1"); // this will create a new key in the object with name mysym and value mynewid1.

Object.freeze(jsUser) // it will freeze the object and we cant change the value of any key in the object.
jsUser.email = "aasimmanzoor@gmail.com"
console.log(jsUser.email); // it will not change the value of email key because the object is frozen.

jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greeting2 = function(){
    console.log(`hello js user, ${this.fullName}`)
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());