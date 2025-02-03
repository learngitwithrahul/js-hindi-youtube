const name = "Rahul"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Rahul-ku')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-6, 2)
console.log(anotherString);

const newStringOne = "     Rahul    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rahul.com/rahul%20ku"

console.log(url.replace('%20', '-'));

console.log(url.includes( 'rahul'));

console.log(gameName.split('-'));










