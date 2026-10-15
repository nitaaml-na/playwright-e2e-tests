"use strict";

/* Extract string by split method
rule:
1. the separator(string | regexp) is omitted from the returned array 
2. if the very first/last char is provided as a separator, it adds an empty string as in the first/last options

return:
string[]
*/

/* scenario
1. get only the date part of the timestamp
2. split by space/first or last char
3. get only the filename
*/

let tstamp = "2026-10-08T11:11:30:207Z"
let str = "Hello World";
let filename = "invoice_123.pdf";

//1. get only the date part of the timestamp
let dtArr = tstamp.split("T")
console.log(dtArr[0]);

//2. split by space/first or last char
let arr = str.split("d")
console.log(arr);

//3. get only the filename
let fileArr = filename.split(".")
console.log(fileArr);