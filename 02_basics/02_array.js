const marvel_Heros = ["Thor","Ironman","Spiderman"];
const Dc_Heros = ["Superman","Flash","Batman"];

// marvel_Heros.push(Dc_Heros);

// console.log(marvel_Heros);
// console.log(marvel_Heros[3][2]);


// console.log(marvel_Heros.concat(Dc_Heros));
// const AllHeros = marvel_Heros.concat(Dc_Heros);

// console.log(marvel_Heros);

// console.log(AllHeros);

// const allNewHeros = [...marvel_Heros, ...Dc_Heros]

// console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6], 7,[6,7,[4,5]]];

const usableAnotherArray = anotherArray.flat(Infinity);
console.log(usableAnotherArray);

console.log((Array.isArray("Hitesh")));
console.log(Array.from("sonu"));
console.log(Array.from({name: "Mohit"})); // Interisting 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
