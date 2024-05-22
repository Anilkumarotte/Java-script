// an array is a special type of object used to store multiple values in a single variable

const { reverse } = require("dns/promises");

let fruits = ['apple', 'banana', 'orange'];
let numbers = [1, 8, 3, 4, 5];
let mixed = ['apple', 3, true, { name: 'John' }];

console.log(fruits[1])

let secondindoxnumber1  = numbers[numbers.length-2]
console.log(secondindoxnumber1)

numbers.sort((a,b)=> a-b )
console.log(numbers)

let desod =numbers.sort((a,b) => b-a)
console.log(desod)




