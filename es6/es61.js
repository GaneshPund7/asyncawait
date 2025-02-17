// What is es6 
/* 
the es6 is ecma script the letest version of javascript which provide additional 
features
for exmple  
in es6 we can create arrow function envention 
the ecma script was introduce in 2015
In the es6 version that have lots of changes in and implimentations has become moch more 
popular than previos version of js

*/
// 1 let and const block socped variable 
//consider as we 
if(true){
let a = 20; //block scoped
let b = 40; // also block socpe 
console.log(a + b);

}
/*
2 Arrow function 
es6 provice arrow function to write function in single line with 
they are most important for consine and callback one liner

*/
const submit = ((a,b) => a + b );
console.log( "This is arrow function", submit(21,32));


const arrf = ((x) => x * x );
console.log(arrf(4));


/*
3 Template string or litteral 
The javascript provide this feture to avoid large code and 
template litteral that assist in express string interpolation which allow to write multiline string
using backstick
 we where add add as variable via following syntax 
 

*/
// let name = "Suraj";
// console.log(`Hello ${name}`)
// it improve the syntax and dynamic string 

let name = `Hello you are the good developer for developing web appliations and so on
so you can move on that is must important for your future, however it not easy to do anything else 
it but if you have I sector job then you can do anything in your life`
console.log(name);


// String interpolation 
// It allow to add variable in string

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;