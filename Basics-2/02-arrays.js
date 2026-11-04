const marvel =["thor", "ironman",  "spiderman"];
const DC = ["batman", "superman", "flash"];
// marvel.push(DC);
// console.log(marvel) // it will add the DC array as a single element in the marvel array.
// console.log(marvel[3]) // it will log the DC array which is at index 3
// console.log(marvel[3][1]) // it will log the second element of the DC array which is at index 1.

const AllHeroes =marvel.concat(DC)
console.log(AllHeroes) // it will merge the two arrays and return a new array.

const newAllHeroes = [...marvel, ...DC]
console.log(newAllHeroes) // it will merge the two arrays and return a new array.
//better to use this bcz it does not limit to only two arrays, we can merge multiple arrays using this method.

const anotherArr =[1,2,3,4,[5,6,7,8],5,6,7,[1,2,[3,4]]]
console.log(anotherArr.flat(Infinity))