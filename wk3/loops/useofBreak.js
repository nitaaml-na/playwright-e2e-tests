/* Use case 3: Use of break statements
scenario:
switch to a specific window */

let windows = ["Google", "Amazon", "Youtube"]
for (let i = 0; i < windows.length; i++) {
    let window = windows[i]
    if (window === "Youtube") {
        //write code to switch to this window
        break
    }
    console.log(window); // Google, Amazon
}