 const name = "aasim"
 const age = 20

//  console.log(name + age + "whatever")
console.log(`my name is ${name} and my age is ${age}`)

const gamename = new String(`aasimgaming`) // using new tag we can have object datatype.
console.log(typeof(gamename));
console.log(gamename[0]);
console.log(gamename.length);

const newName = gamename.slice(0, 5)
console.log(newName);

// const name2 = gamename.slice(-3, -1)
// console.log(name2);
                                            // => convert -ve into +ve by adding length of string.
// const name3 = gamename.slice(8, 10)
// console.log(name3);

const email = "asimrather4@gmail.com"
console.log(email.replace("rather","manzoor"));
console.log(email.split("@"));

// master the functions of string.