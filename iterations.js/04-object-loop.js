 // ########### for in ##########//
 
 const myobject = {
    js : 'javascript',
    rb : 'ruby',
    py : 'python'
 }
 for (const key in myobject) {
    // console.log(key);    //output : keys.
   //  console.log(myobject[key]); // output : values.
    console.log(`${key} is shortcut for ${myobject[key]}`); // output :key value pairs.

 }

 const students = ["ghola","bhola" , "dhola"]
 for (const key in students) {
   // console.log(key) //output : index of values.
    console.log(`${students[key]} is my friend`)
 } 
