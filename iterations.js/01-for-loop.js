 // for loop 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

for(let day = 1; day <= 30 ; day++){
    // const element = day
    // console.log(element);
    if(day == 16){
        //console.log("half of month is now over")
    }
    //console.log(day)
}
// intresting : main loop value repeats after the sub loop value is printed 10 times. 
for(let i = 0; i <= 10 ; i++ ) {
    // console.log(`main loop value ${i}`);

    for (let j = 0; j <= 10 ; j++) {
        // console.log(`sub loop value:  ${j} and  main loop value :${i}`)
    //   console.log(i + "*" + j + "=" + i*j)
    }
      
}
let students = ["aasim","harsh", "aman" , "gola" ,"bhola","dhola"]
console.log(students.length)
for (let index = 0; index < students.length; index++) {
    const element = students[index];
    // console.log(element)
    
}

// break and continue.
for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log("broke the code at 5")
        break
    }
    console.log(`your value is : ${i}`)
}
for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log("skip 5 and continue")
        continue
    }
    console.log(`your value is : ${i}`)
}