const user = {
    username: "Prashant",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "prashant"
//     console.log(this.username);
// }

// chai();

// const chai = function() {
//     let username = "Prashant"
//     console.log(this.username);
// }

// chai();


const chai = () => {
    let username = "prashant"
    // console.log(this);
}

chai();

//syntax arror function

//Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

//Implicit return
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "Prashant"});


console.log(addTwo(3,4));

const myArray = [2,5,3,7,8];

// myArray.forEach(() => ({}));
