// Dates
 
let birthdate = new Date()
// console.log(birthdate)
// console.log(birthdate.toString())
// console.log(birthdate.toDateString())
// console.log(birthdate.toLocaleString())

// let myBD = new Date(2006,4,28,12,00)
let myBD = new Date("2006-05-28")
console.log(myBD.toDateString())
console.log(myBD.toLocaleString())

// to get the time stamp 
let mytimestamp = Date.now()
console.log(mytimestamp)
//time stamp of myBD
console.log(myBD.getTime())

// `${myBD.getMonth()} this is my birthday month`

newDate.toLocaleString('default',{
    weekday: 'long',
})