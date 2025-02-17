//  syncronization in js is code run in perticular sequence of given instruction 
//which given in the program 
// for ex

console.log("one");
console.log("two");
console.log("three");

setTimeout(function submit(){
    console.log("Hello we are a good developer");   
} ,2000);


setTimeout(() => {
    console.log("hello ji");
    
}, 4000);
// setTimeout(submit, 2000);



