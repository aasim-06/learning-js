if (2 ==="2"){                     
    console.log("correct");
}else {console.log("incorrect");}


if (2 ==="2"){                    // output : nothing.
    console.log("correct");
} 
console.log("i am going to be exetuted anyways")

const score = 200
if (score > 199){
    const school = "hfps"
    console.log(`my school : ${school}`)
}

const age = 10
if(age == 18){
    console.log("we need to meet in person")
}
else if(age <12  ){
    console.log("ho xe wasya trath")
}
else if (age < 18){
    console.log("you are not eligible for licence")
}
else {console.log("you are eligible for licence")}

const height =  5.1
const male = true
const female = false
const status =  "unmarried"
if (height > 5 && male && female && status == "unmarried"){
    console.log("hi")}
if (male || female){
    console.log("welcome")
}
