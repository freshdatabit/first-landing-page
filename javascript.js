console.log(2 + 2 + '1'); // "41" and not "221"
console.log('2' + 1 + 1);
// the one above doesnt give 14 becasue the (2) acts as a string so the whole thing is treated as a st
console.log(Number('2') + 1 + 1);
//this one i added the number modifier or whatever you call it and turned it into a number if possible

let x = '20';
console.log(+x + 2);

let u = 10;
u *= 9
let h = u *= 8
console.log(h);

// let x = 7 *= u. THat was wrong beacause youre supposed to do it the other way around. 

const max = 57;
let actual = max - 13
console.log(actual)
let percentage = actual / max;
console.log(percentage.toFixed(3));

const bigmouth = 'i\'ve'
console.log(bigmouth);
// \ this is for definiting that the next charater is not part of the code and is jusat text

const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

//you can use the + to add but the ${} is easier to read

const number = 687;
const string = 'Project';
console.log(`${string} attempt ${number}`);

const newNumber = 987;
const myNum = Number(newNumber);
let o = 'string variable';
console.log(`${myNum} ${o}`)


const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);

const movie = "My Life";
const score = 9;
const highestScore = 10;
const rating = `I give this ${movie}, a rating of \n ${score / highestScore * 100}%`;
console.log(rating);

// the ` (tempalte literal) respects line formatting of a new line. you can also add a line break with \n

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
length = alphabet.length;
console.log(length);

let text = "Apple, Banana, Kiwi";
let part = text.slice(-12, -6);
console.log(part)

let str = "Apple, Banana, Kiwi";
let part2 = text.substring(7);
console.log(part2)

let animals = "I love cats. Cats are very easy to love. Cats are very popular.";
animals = animals.replaceAll('cats', 'dogs');
animals = animals.replaceAll('Cats', 'Dogs');
console.log(animals);

const sentence = 'The quick brown fox jumps over the lazy dog.';
sentence.toUpperCase();
console.log(sentence.toUpperCase());

let myName = 'Dharrshen';
myName = myName.toLowerCase();
console.log(myName)

let cat = 'cat'
console.log(cat[2]);

const a = "a";
const b = "b";
if (a < b) {
  console.log(`${a} is less than ${b}`)
}


const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
console.log(longString)

const hour = new Date().getHours();
let greeting;
if (hour < 18) {
  greeting = 'Good Day'
} else if (hour < 22) {
  greeting = "Go to Sleep"
}
else {
  greeting = 'its late';
}
console.log(greeting)

