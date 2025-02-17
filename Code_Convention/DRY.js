//  In javascript 
let x = 2;
let a = 20;
let b = 10;
let c = 21;
let d = 11;

let value;

function add(a, b) {
    let c = a - b;
    console.log(c);
}

switch (x) {
    case 1:
        add(a, b);
        break;

    case 2:
        add(c, d);
        break;

    case 3:
        add(a, b);
        break;

    case 4:
        add(a, b);
        break;
    default:
        console.log("Enter Currrect Input:");
        break;

}
//  use DRY is the way that avoid to write a log code 
// and complixity of code for better undersanding 


// avoid hard coded string
// when you need to use same key again and again then we can divide this key into the some part
// and direct call to them.

// ex 
//  dont do this 

const secreateKey = 'hxgksfld;lzdf;ljdfosfdjfvskvslkfdfgdfsdgdfgs';

// do this 
// let passKey = 'hxgksfld;lzdf;'
const secreateKe = procerss.env.passkey || process.env.secreateKey || 'your key' ;

