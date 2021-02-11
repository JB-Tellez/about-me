'use strict';

// define a function - function is a description of work to be done
function sayHola(name) {
  //1 parameter given
  //body of the function
  let string = 'Hola ' + name;
  return string;
  // returns a string
}
// invokes/ calls the function
let result = sayHola('Jakob');
// argument/ input is jakob
console.log(result);

// signature defines the types and number of inputs - and type of output
