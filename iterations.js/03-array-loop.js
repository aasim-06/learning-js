// commonly used .
// ["","",""]
// [{},{},{}]

// ########################## for of ##########################  //
const arr = [1,2,3,4,5]
for (const x of arr) {
    // console.log(x)
}
let table = [1,2,3,4,5,6,7,8,9,10]
for (const x of table) {
    // console.log(`x` + "*" + 10 + "=" + x*10)
}

const myname = "aasim"
for (const spell of myname) {
    // console.log(`character of my name : ${spell}`)
}

// ################ maps ################## //
// map object holds key value pairs , unique values in order,are not iterable so for in is not applicable on maps.
const map = new Map()
map.set('in', 'india')
map.set('usa','amarica')
map.set('fr', 'france')
console.log(map)

// for (const key  of map) {
//     console.log(key )
// }
for (const [key,value] of map) {
    console.log(key,'=>' ,value)
}
// const myobject = {
//     name :"aasim",
//     rollnum: 1126
// }
// for (const [key,value] of myobject) {
//     console.log(key,'=>' ,value)
// }                                  => does not work.