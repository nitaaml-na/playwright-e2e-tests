/* for... in and for...if
purpose:
for...in > object
for...of > array */

let obj = {
    a : 10,
    b : 20,
    c : 30
}

let windows = ["Google", "Amazon", "Youtube"]

//for... in loop
for (let key in obj ) {
    console.log(key); //gets all keys
    console.log(obj[key]); //gets all the values
}

//for... of loops
for (let ele of windows) {
    console.log(ele);
}