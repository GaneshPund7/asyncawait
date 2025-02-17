// Function Declaration 

function add(a,b){
    return a + b;
}

// Function Expression 
/* function expression is allow in js to function will assigend to the variable 
passing as argument or invoking immidiatly*/ 
const added = function(a,b){
    console.log(a,b);
    
}
console.log(add((2,3)));

// add();

const name = function(name){
    return `hello ${name}`;
}
console.log(name("Ganesh"));

