// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// avoid this type of conversion 

/* above conversion statement ::: the reason is that an equality check == and comparisions > <>=<= work differently.
comparisions convert null to a number, treating it as 0.
that's why (3) null >=0 is true and (1) null>0 false 
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// avoid this type of conversion 

// === 

console.log("2" === 2);







