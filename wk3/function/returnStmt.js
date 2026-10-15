"use strict";

/* Return statement

scenario
1. return a single primitive value
2. returns an expression [that evaluates to a value]
3. return an object type
4. return a function itself
5. return statement in conditional statement
*/

// function addTwoNum(num1, num2) {
//     let sum = num1 + num2;
//     return {total: sum};
// }

//returning a function
// function addTwoNum(num1, num2) {
//     return function () {
//         return num1 + num2
//     };
// }

 function addTwoNum (num1, num2) {
    if (!num1) {
        return
    }
    let sum = num1 + num2
    return sum
 }

//calling the function
let total = addTwoNum(undefined, 2)
console.log(total);