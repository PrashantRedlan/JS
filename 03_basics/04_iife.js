// Immediately Invoked Function Expressions (IIFE)

(function chai(){
   console.log(`DB CONNECTED`); 
})();

// chai();

// whenever we write two IIFE together it is compulsory to give ';' otherwise it will throw an error 

((name) => {
    console.log(`DB CONNECTED 2 ${name}`);
})("Prashant");