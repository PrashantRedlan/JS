// var c = 300
let a = 300;
if(true){
let a = 10
const b = 20
// console.log("a = ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log("a = ", a);


function one(){
    const username = "Prashant"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two();
}

one();


if(true){
    const username = "Prashant"
    if(username === "Prashant"){
        const website = " Youtube";
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);




// +++++++++++++++++++++++++ Interesting ++++++++++++++++++

console.log(addOne(5));
function addOne(num){
    return num + 1
}


addTwo(5);
const addTwo = function(num){
    return num + 2;
}

