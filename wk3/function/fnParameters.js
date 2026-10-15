"use strict";

/* function parameter
scenario
1. default param
2. passing undefined/any falsy values if not known
3. passing primitives, object type as arg*/

//1. default param
// function greet(name, greeting = "Hello") {
//     console.log(`${greeting}, ${name}!`);
// }

// greet("Nita", "Hi")

//2. passing undefined/any falsy values if not known
// function printFullname(fname, mname, lname) {
//     //console.log(`The full name is: ${fname} ${mname} ${lname}`);
//     if(mname) {
//         console.log(`The full name is: ${fname} ${mname} ${lname}`);
//     } else {
//         console.log(`The full name is: ${fname} ${lname}`);
//     }
// }
// printFullname("Nita","","Amalia")

//3. passing primitives, object type as arg
function printFullname(personObj) {
    console.log(`${personObj.firstname} ${personObj.lastname}`);
}

printFullname({
    firstname: "Nita",
    lastname: "Amalia",
});