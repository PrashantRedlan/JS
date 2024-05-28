

 function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A ");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");
 }

//  sayMyName();

//  function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
//  }
 function addTwoNumbers(number1, number2){
   //  let result = number1 + number2;
   //  return result;
   return number1 + number2;
 }

 const result = addTwoNumbers(3,5);

//  console.log("Result: ", result);

// if userName is not passed the it will return undefined in place of username
 function loginUserMessage(username = "sam"){
   // if(!undefined){
   //    console.log("Please enter an username ");
   //    return;
   // }
   if(username === undefined){
      console.log("Please enter an username ");
      return;
   }

   return `${username} just logged in`;
 }

//  const ans = loginUserMessage("Mohit");

 console.log(loginUserMessage());
//  console.log(loginUserMessage());
// console.log(ans);