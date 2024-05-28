const tinderUser1 = new Object()
const tinderUser2 = {};

tinderUser1.id = "123abc";
tinderUser1.name = "sammy";
tinderUser1.isLoggedIn = false;
// console.log(tinderUser1);
// console.log(tinderUser2);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Prashant",
            lastName: "Redlan"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "e", 6: "f"};

// const obj3 = { obj1, obj2};
// => Assign method is also not used a lot the most used for this purpose is spread operator
// const obj3 = Object.assign({}, obj1, obj2,obj4)
// console.log(obj3);

//This ... is called spread operator it is used the most for concatinating two or more objects or arrays here with ... we spreaded two objects and combined it into 3 object
// const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },

]

// console.log(users[1].email);
// console.log(tinderUser1);

// console.log(Object.keys(tinderUser1));
// console.log(Object.values(tinderUser1));
// console.log(Object.entries(tinderUser1));
console.log(tinderUser1.hasOwnProperty('isLoggedIn'));