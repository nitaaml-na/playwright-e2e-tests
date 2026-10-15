/*  Logical Operators
|| OR */

//check if given day is weekend or not

let day = "Sunday"
if (day === "Saturday" || day === "Sunday") {
    console.log(`Given day: ${day} is a weekend`);
} else {
    console.log(`Given day: ${day} is NOT a weekend`);
}