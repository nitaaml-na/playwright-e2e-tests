/* While loop
@when to use?
    -until a condition is met for when the end condition is not known
    -e.g. retry until you get a response
scenario:
    waiting for an API response, retry max of 10 times */

//syntax
let count = 1
let isDataReturned = false
while (isDataReturned === false && count <= 10) {
    console.log(count);
    if (count == 5) {
        //we got an API response
        isDataReturned = true
    }
    count++;
}
