let score = 0
while(score <= 100){
    // console.log(`score is :${score}`)
    score = score + 6

}
let heroes = ["gholu" ,"bholu", "dholu "]

let arr = 0 
while(arr < heroes.length){
    console.log(`hero of the century is :${heroes[arr]}`)
    arr = arr + 1 
}
// let marks = 0        
// do{
//     console.log(`marks are :${marks}`)
//     marks = marks + 10
// }while(marks <= 100)
let marks = 100          //it will print 100 , as it is first excuted and then condition is applied.
do{
    console.log(`marks are :${marks}`)
    marks = marks + 10
}while(marks <= 100)