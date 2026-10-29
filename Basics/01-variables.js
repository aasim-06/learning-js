const acountId = 2006
let accountEmail = "aasim123@gmail.com"
var accountPassword = "123456"
accountCity = "srinagar"
// dont use like this ( i mean without let variable )
// prefer not to use var ,bcz of issue in block scope {} and functional scope

// acountId = 2008 not allowed
 accountEmail ="aasim321@gmail.com"
 accountPassword = "654321"
accountCity ="sopore"
let accountState;

console.log(acountId);

console.table([accountEmail,accountPassword,accountCity,accountState])
 
