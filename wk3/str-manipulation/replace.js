"use strict";

/* Replace and replace all
rules:
1. replace method can accept a string/regexp as its first arg

returns:
the modified string value
*/

/* scenaio
1. get only the filename
2. rename the file extention from .pdf -> .txt
3. replace table_name with accounts
4. convert the given date format to YYYMMDD format
*/

let filename = "invoice_123.pdf";
let query_template = `SELECT * FROM {{table_name}}`
let dt = "2026-10-08";

//1. get only the filename

let onlyfilename = filename.replace(".pdf", "")
console.log(onlyfilename); // invoice_123

//2. rename the file extention from .pdf -> .txt
let txtfile = filename.replace("pdf", "txt")
console.log(txtfile);

//3. replace table_name with accounts
let actualQ = query_template.replace("{{table_name}}", "Account")
console.log(actualQ);

//convert the given date format to YYYMMDD format
let modifiedDt = dt.replace(/-/g, "")
console.log(modifiedDt);
