//switch case

let browser = "brave"

switch (browser) {
    case "Chrome":
        console.log(`>> Running chrome browser...`);
        break;
    case "Firefox":
        console.log(`>>Running firefox browser...`);
        break;
    case "Edge":
        console.log(`>>Running edge browser...`);
        break;
    default:
        console.log(`No valid browser: ${browser} is provided`);

}