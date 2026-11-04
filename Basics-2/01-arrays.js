// array //
const myArray1 = [1, 2, 3, 4, 5]
const myArray2 = new Array(1, 2, 3, 4, 5)
const myArray3 = ["aasim ", "muneeb" ," hazim"]
// console.table([myArray1, myArray2, myArray3])
// console.log(myArray3[1])


// array methods //


myArray3.push("faheem","sumaid")
myArray2.pop() // by default it removes the last element of the array.
// console.log(myArray3)

myArray1.unshift(10) // adds the 10 in front.
myArray1.shift()     // removes the first elemnt by default.
// console.log(myArray1)

// console.log(myArray2.includes(4));
// console.log(myArray2.indexOf(4));

const newArray = myArray1.join()
console.log(newArray) // it will convert the array into string and return the string.
console.log(typeof newArray) 


// slice and splice methods // 
console.log("A",myArray1)
const na1 =myArray1.slice(1,3) // it slices the array and returns from index 1 to index 2.
console.log(na1)

const na2 = myArray1.splice(1,3) 
console.log("B",myArray1) // it removes the elements from index 1 to index 3 
// and returns the removed elements.
console.log(na2)