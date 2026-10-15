"use strict";

/* Compare string
1. full match
2. partial match
    -includes()
    -startsWith()
    -endsWith() 
    
    question:
    1. is this a case sensitive comparison
    2. does the string needs to be trimmed?
    
*/

let filename = "invoice_123.pdf"

//full match
if (filename.toUpperCase().trim() === "INVOICE_123.PDF") {
    console.log(`>> the filename matches...`);
}

//partial comparison
if(filename.endsWith(".pdf")) {
    console.log(`Yes it ends with .pdf...`)
}