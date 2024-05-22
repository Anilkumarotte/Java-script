let myarray=[];//An empty array
let fruits =["apple","banana","orange"];
let codelangs=["c#","Python","javascript"];
// methods to be used in arrays
// 1.push=>it adds data to the array at the end
codelangs.push("Ruby","Python");
console.log(codelangs);
fruits.pop();//pop is used to remove the last item in array
console.log(fruits);
 let removed=fruits.shift();//shift is used to remove the first item and also returns the value
 console.log(removed);
console.log(fruits);
let cars=["ferrari","lamborghini","BMW"];
cars.unshift("Audi","Thar");//unshift is used to add data at the begining and also returns the length of the array
console.log(cars);
console.log(cars.length);
 
 
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(fruits);
cars.splice(1,2,'xyz');//splice is used to remove and add elements at the same time we can remove (the first place is for index, second place for no of deletion,3rd place for what to be replaced)
 
console.log(cars);
 
//Javascript join() method
//syntax:array.join(seperator)
//cars.join('-');
console.log(cars.join('-'));
//Converting arrays to string
const accesories=['chain','ring','earring'];
//syntax:array.toString()
//accesories.toString();
console.log(accesories.toString());
 
//delete operator we can only delete object properties but not whole object
let emp = {  
    firstName: "Raj",  
    lastName: "Kumar",  
    salary: 40000  
}  
 
//console.log(delete emp);  (not whole object)
console.log(delete emp.firstName);
console.log(emp);
//Array Concat()method used to concat two or three arrays
//syntax:let newArray = arr.concat()  // or
//let newArray = arr1.concat(arr2) // or
//let newArray = arr1.concat(arr2, arr3, ...) // or
//let newArray = arr1.concat(value0, value1)
let arr1=['10','11','12'];
let arr2=['23','45','45'];
let arr3=['457','457'];
//let newarray=arr1.concat(arr2,arr3);
let newarray = arr1.concat('17', '1');
console.log(newarray);
const arr=[['1','2','4'],['9'],['cars','trains']];
const flatarr=arr.flat(2);
console.log(flatarr);
const array = [[1, [2, [3, [4]]]], [5, [6]]];
const flatArr = array.flat(3);
console.log(flatArr);
//slice
let slicing=[1,2,3,3,3,4,5];
let newslicing=slicing.slice(3,5);
console.log(newslicing);
let sl=['a','b','c','d']
let newsl=sl.slice(1,4); //slice starts from the index before the index value all will be deleted Since the slice() method excludes the end index, it will include all elements from index 0 to index 3.
console.log(newsl);
//index of
let num=['ab','bc','cd','ab'];
let ans=num.indexOf('ab');//gives us the index of the value of first one if two same elements are present if the element is not present it will give -1
console.log(ans);
 