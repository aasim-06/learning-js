const marks = 484
console.log(marks);
const totalmarks = new Number(500)
console.log(totalmarks); // specially mentions that it is number.
console.log(typeof(totalmarks));
// we also have some functions in numbers,

console.log(totalmarks.toString().length);
console.log(totalmarks.toFixed(2));

const price = 499.89
console.log(price.toPrecision(3));
console.log(price.toPrecision(4));
console.log(price.toPrecision(2));

const hund = 1000000000
console.log(hund.toLocaleString("en-IN"));

// ##################################  Maths  ####################################################### //

console.log(Math);
// console.log(Math.abs(-55));
// console.log(Math.round(4.6));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.min(0, 150, 30, 20, -8, -200));
// console.log(Math.max(0, 150, 30, 20, -8, -200));
// console.log(Math.sin(90));

console.log(Math.random()); // OUTPUT => 0.0 to 1.0  (always)
console.log(Math.random()*10) // OUTPUT => 0.0 to 10.0 (always)
// to avoid 0 , we can add 1 to above code,
console.log((Math.random()*10)+1) // OUTPUT => 1.0 to 10.0 (always)


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // OUTPUT => 10 to 20 (always);
