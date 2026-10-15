/* Logical Operators
 ! NOT */

//check if both first and last name is provided

let firstname = "Rob"
let lastname = ""

if (!firstname || !lastname) {
    console.log(`One of the names: ${firstname} or ${lastname} is not a valid`);
}