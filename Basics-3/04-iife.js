// iife => immediatly invoked function expressions //

//named iife
(function chai(){
    console.log("hello hello")
})();  // here semicolon is important to run the next iife.

// un-named iife
( (name) => {
    console.log(`how are you${name}`)})
(" aasim")
