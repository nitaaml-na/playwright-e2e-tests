"use strict";

/* extract substring - use of slice method
rules:
1. slice method requires start(inclusive and end index (end index is not included)
2. you can specify only the start index
3. you can spesific the negative range
*/

/* scenario
1. extract only yy-mm-dd format
2. extract year (4 digits) - 0 index
3. extract month - 5 index
4. extract date - 8 index
*/

let dt = "2026-10-08"

//extract only yy-mm-dd format
let yymmdd = dt.slice(2)
console.log(yymmdd);

//extract year (4 digits) - 0 index
let year = dt.slice(0,4)
console.log(year);

//extract month - 5 index
let month = dt.slice(5,7)
console.log(month);

//extract date - 8 index
// let day = dt.slice(8,10) //option 1
// console.log(day); // option - only start
let day = dt.slice(-2) //negative index
console.log(day);