// singleton
// Object.create

// Object literals

const sym = Symbol("key1");
const JsUser = {
    name: "Prashant",
    "full name": "redlan",
    age: 18,
    location: "Gurgaon",
    [sym]: "myKey1",
    email: "prashant@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.sym);
// console.log(typeof JsUser.sym);
// console.log(JsUser[sym]);

// JsUser.email = "Prashant@chatGPT";
// console.log(JsUser["email"]);
// console.log(JsUser);
// Object.freeze(JsUser);
// JsUser.email = "Prashant@microsoft";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




