//Variables in JavaScript are containers for storing data values. They are declared using var, let, or const.

// Variables declared with var are function-scoped. They are accessible within the function in which they are declared, regardless of the block they're in.
// var variables are hoisted to the top of their function or global scope. This means you can use a variable before it's declared without getting an error, though its value will be undefined.
// Variables declared with var can be re-declared and updated within their scope.

var name = "Anil kmumar Otte"; // 'var' allows redeclaration and reassignment
let age = 27 ;// 'let' allows reassignment but not redeclaration





function example(){


    var x = 10;
    if (true){
        var x = 20;

       console.log(x) 
    }
   console.log(x)
   
}
example()

//In this example, x is declared using var inside the if block, but it is still accessible outside the block when we log it to the console.



function letexample()
{

    let x = 12;
    if (true){

        let x = 13;
        console.log(x)
    }
    console.log(x)
    
    }
letexample()


function exampleLet() {
    if (true) {
      let y = 20;
      //console.log(y)
    }
    console.log(y); // Throws a ReferenceError: y is not defined
  }
  
  exampleLet();


  function exampleConst() {
    const z = 30;
    

    z = 40; // Throws a TypeError: Assignment to constant variable
    y =30;

   
  }
  
  exampleConst();

  //In this example, z is declared using const and is immediately assigned the value 30. When we attempt to reassign it to 40, a TypeError is thrown because const variables cannot be reassigned.
//However, const does not make objects or arrays immutable. You can still change the properties of objects and the elements of arrays declared with const.
// const PI = 3.14;
// PI = 3.14159; // Error: Assignment to constant variable

const person = { name: 'John' };
person.name = 'Jane'; // This is allowed
console.log(person); // Outputs: { name: 'Jane' }
