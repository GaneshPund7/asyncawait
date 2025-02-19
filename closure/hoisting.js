// async
// await 
// closure 
// function delclaration 
// function exresstion
// anonoymous function
// arrow function
// hoisting
// error handling
// file handling
// promises 
// Scopes
// loops  
// opraters
// let name = "Rajeshri";

const { log } = require("console");


function Submit() {
    setTimeout(() => {
        console.log(name2);

    }, 0);
    try {
        console.log(name1);

    } catch (error) {
        console.log(error.message);
    }
    finally {
        console.log("Data has been get successfully");
    }
    //    return name1;
}

Submit();
var name = "Raj"
let name1 = "Vaishali";
const name2 = "Ganesh";

async function numbers(numb) {
    try {
        let numb1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(numb)
            }, 1000)
        })

        let numbs = await numb1;

        let largest = -Infinity;
        let secondLargest = -Infinity;
        let thirdLargest = -Infinity;

        for (let i = 0; i < numbs.length; i++) {
            console.log(numbs[i]);

            if (numbs[i] > largest) {
                thirdLargest = secondLargest;
                secondLargest = largest;
                largest = numbs[i];

            } else if (numbs[i] > secondLargest && numbs[i] !== largest) {
                secondLargest = numbs[i];
            } else if (numbs[i] > thirdLargest && numbs[i] !== secondLargest && numbs[i] !== largest) {
                thirdLargest = numbs[i];
            }
        }
        if (largest > 0) {
            console.log(`The largest no is ${largest}`);
        } else if(largest > 0) {
            console.log(' The Second largest no is:', secondLargest);
        }else if(secondLargest > 0){
         console.log(`The third largest number is: ${thirdLargest}`);
        }
    } catch (error) {
        console.log(error.message);
    }
}

setTimeout(() => {
    numbers(number);
}, 1000);

let number = [10, 32, 5, 55, 777, 56, 44, 33, 66, 8];