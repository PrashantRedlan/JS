const myNumbs = [1,2,3];

//  const myTotal = myNumbs.reduce(function(accumelator,currentValue) {
//     console.log(`accumelator ${accumelator} and currentValue: ${currentValue}`);
//     return accumelator + currentValue
//  },0);

const myTotal = myNumbs.reduce( (accumelator,currentValue) => accumelator + currentValue,0)

 console.log(myTotal);

 const shoppingCart = [
     {
     itemName: "js Course",
     price: 2999
     },
     {
     itemName: "Java course",
     price: 999
     },
     {
     itemName: "mobile Course",
     price: 5999
     },
     {
     itemName: "Data scientist Course",
     price: 12999
     },
]

const priceToPay = shoppingCart.reduce( (accumelator,item) => accumelator + item.price,0);

console.log(priceToPay);