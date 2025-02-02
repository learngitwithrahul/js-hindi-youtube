// primitive 

// 7 types : string , number , boolean , null , undefined , symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 2154512541124n

// refrence (non primitive)

// Array , Objects , Functions

const hero = ["shaktiman" , "nagraaj" , "doga"];
let myObj = {
    name: "Rahul",
    age: 25,
}

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof myFunction);
