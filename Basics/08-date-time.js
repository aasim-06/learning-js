// Dates
 
let date = new Date()
// console.log(date)
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toLocaleString())

let myBD = new Date("2006-05-28")
console.log(myBD.toDateString())
console.log(myBD.toLocaleString())

// to get the time stamp 
let mytimestamp = Date.now()
// console.log(mytimestamp)
//time stamp of myBD
console.log(myBD.getTime())

// `${myBD.getMonth()} this is my birthday month`

newDate.toLocaleString('default',{
    weekday: 'long',
})