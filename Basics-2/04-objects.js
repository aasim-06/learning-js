// const chatgpt = new Object() //singeleton object.
const chatgpt = {} // same output as above(but this is non-singeleton object.)
chatgpt.modal = "basic",
    chatgpt.company = "open AI",
    chatgpt.year = 2017,
    chatgpt.isOpen = true
// console.log(chatgpt)

const mydet = {
    email: "aasim@gmail.com",
    allName: {
        fullname: {
            firstName: "mohammad",
            lastName: "aasim",
        },
        userName: {
            insta: "aasim__06",
            github: "aasim-06",

        }
    }
}
// console.log(mydet.allName.userName.gith);


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 5: "e", 6: "f" }
// const obj4 ={obj1, obj2, obj3}
// const obj4 = Object.assign({},obj1,obj2,obj3)  // Object.assign(target,source)
const obj4 = { ...obj1, ...obj2, ...obj3 }
console.log(obj4)

const arrobj = [
    {
        name: "aasim",
        age: 20
    },
    {
        name: "muneeb",
        age: 17
    },
    {
        name: "hazim",
        age: 14
    }
]
console.log(arrobj[0].name)

console.log(Object.keys(chatgpt));
console.log(Object.values(chatgpt));
console.log(Object.entries(chatgpt));

console.log(chatgpt.hasOwnProperty('modal'))

//################ Destructuring of objects ################################//

const course = {
    courseName: "js in hindi",
    price: 999,
    teacher: "hitesh sir"
}
// course.teacher(we are not going to call it again and again)

const { teacher: t} = course
// console.log(teacher)
console.log(t)



//0000000000000000000000000000000 JSON 00000000000000000000000000000000000000000000//
{
    "course" : "js in hindi",
        "price" : 999,
            "teacher" : "hitesh sir"
}

[
    {},
    {},
    {},
]