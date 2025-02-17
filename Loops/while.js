let a =0;
while(a<5){
    console.log("true",a);
    a++;
}


// find the largest not using for loop 
// do not use inbuild method

let numbers  =[1,2,3,54,5,6,7,65,5,4,3,28,1];

let largest = -Infinity;
let secondLargest = -Infinity;
let thirdLargest = -Infinity;
for(let i = 0; i<numbers.length; i++ ){
     if(numbers[i]>largest){
        thirdLargest  = secondLargest;
        secondLargest = largest;
        largest = numbers[i];

     } else if(numbers[i] > secondLargest && numbers[i] !==largest){
        thirdLargest = secondLargest;
        secondLargest = numbers[i];
        
     }
     else if(numbers[i] > thirdLargest && numbers[i] !==secondLargest && numbers[i] !==largest){
        thirdLargest = numbers[i];

     }     
}
console.log('fist lrgest : ',largest);
console.log('Second Largest ',secondLargest);
console.log('Third Largest',thirdLargest);


 
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         thirdLargest = secondLargest;  // Update third largest before second largest
//         secondLargest = largest;       // Update second largest before largest
//         largest = numbers[i];          // Update largest
//     } else if (numbers[i] > secondLargest && numbers[i] !== largest) {
//         thirdLargest = secondLargest;  // Update third largest before second largest
//         secondLargest = numbers[i];    // Update second largest
//     } else if (numbers[i] > thirdLargest && numbers[i] !== secondLargest && numbers[i] !== largest) {
//         thirdLargest = numbers[i];     // Update third largest
//     }
// }

// console.log('First Largest:', largest);
// console.log('Second Largest:', secondLargest);
// console.log('Third Largest:', thirdLargest);



// let numbers = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1];

// let largest = -Infinity;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }

// console.log(largest); // Outputs the largest number


