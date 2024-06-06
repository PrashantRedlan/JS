const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNumbers.map( (num) => {return num + 10});
// console.log(newNums);

// This is wrong as forEach() Method doesn't return new array so output will be undefined
// const newNums2 = myNumbers.forEach( (nums) => {return nums+10});
// console.log(newNums2);

//This is also wrong this also don't work
// const newNums2 = myNumbers.filter( (nums) => {return nums + 10});
// console.log(newNums2);


const newNums = myNumbers
                    .map((num) =>num * 10 )
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40);
                    
console.log(newNums);