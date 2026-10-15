/* 1. string
2. number
3. boolean
4. object
5. array
6. regexp
7. undifined and null */

//string
let str = 'Hello'
let str1 = "Hello"
let str3 = `${str}, World!`
console.log(str3);

//number
let num = 5
let num2 = 5.5

//boolean
let bool = true

//object
let obj = {}

//array
let arr = []

//regexp
let re = /abc/

//undefined, null
let val1
let tempObj = null

console.log(`The type of str is: ${typeof str}`);
console.log(`The type of number is: ${typeof num2}`);
console.log(`The type of boolean is: ${typeof bool}`);
console.log(`The type of Object is: ${typeof obj}`);
console.log(`The type of array is: ${typeof arr}`);
console.log(`The type of regexp is: ${typeof re}`);
console.log(`The type of undefined is: ${typeof val1}`);
console.log(`The type of null is: ${typeof tempObj}`);