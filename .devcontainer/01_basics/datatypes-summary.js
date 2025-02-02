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

// ++++++++++++++++++++++++memory+++++++++++++++++++++

// stack (primitive),  Heap(non - primitive)

let myYoutubename = "learntoRahul"

let anothername = "myYoutubename"
anothername = "Rahulgit"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "rahul@google.com"

console.log(userOne.email);
console.log(userTwo.email);

