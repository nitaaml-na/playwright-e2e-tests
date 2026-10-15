/* a data type can be represented in one of these forms:
1. literals
2. variable
3. expression */

//string
console.log("Hello") // literals
let str = "Hello" // Variables
console.log("He" + "llo"); //expression

//boolean
console.log(true) // literals
let bool = true// Variables
console.log(bool); 
console.log(typeof(5 < 10)); //expression

//functions

function sum(num1, num2){
    return num1 + num2 //return type is a number
}

sum(2, 2)
console.log(sum(2, 2)); //4
console.log(typeof (sum(2, 2)) );
