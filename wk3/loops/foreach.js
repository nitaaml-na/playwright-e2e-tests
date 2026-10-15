/* Use of forEach method
1. it can be used to access the array's element */

let windows = ["Google", "Amazon", "Youtube"]

//() => {}

windows.forEach((val, index, arr) => {
    console.log(val);
    console.log(index);
    console.log(arr);
});