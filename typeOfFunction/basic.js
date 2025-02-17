/*

What is function in js
the function in js is block of code which use for perform perticular opration in it
and that is reusable 
when you create a function in your code or object then we can use it again and angin 
there are several way to create a function in js 

1 Arrow function 
2 Named function 
3 Ananoymoes function 
4 IFFE function 
5 
*/
// basic type of function
//this function declaration is the tradetional way to define a function 
//here the function is define inside a variable and the function value it returns it
//in that variable 

function name(){
    console.log("hello ");
    
}
name();

// Arrow function 
// arrow function shold be declare in the variable 
// this is single line invocq function 
const arrowf = ((x,y) => x - y);
console.log("The substraction of two variable is: ",arrowf(12,5));


// IIFE (imidiatly invoked function expression )
// this type of function that are executed imideatly after they are define 
(function IIFE(){
    console.log("Hello this is IIFE function");
})();

const counter = (function(){
    let count = 3;
    return {
        increment: function(){
            count++;
        },
        decrement: function(){
            count--;
        },
        getCount: function(){
            return count;

        }
    };
})();
console.log(counter.getCount());
console.log(counter.increment());
