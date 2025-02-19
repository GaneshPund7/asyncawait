//  Closure in js 
//  the closure is the combination of function 
// that internal function can access the properties of outer function 
function main(mainA) {
    function addition(b) {
        return mainA + b;
    }

    function subtraction(b) {
        return mainA - b;
    }
 return {
     addition, 
     subtraction
 }
 
}

let operations = main(3);

console.log(operations.addition(5)); // Output: 8
console.log(operations.subtraction(6)); // Output: -3
