// let arrays = [13,5,54,33,3,66,7,8,54];

// let largest = -Infinity;
// let secondLargest = -Infinity;
// let thirdLargest = -Infinity;
// let forthLargest = -Infinity;

// for(let i= 0; i<arrays.length; i++){
    
//     if(arrays[i] > largest){
//         forthLargest = thirdLargest;
//         thirdLargest = secondLargest;
//         secondLargest = largest;
//         largest = arrays[i];

//     }else if(arrays[i] > secondLargest && arrays[i] !== largest){
//         secondLargest = arrays[i];
//     }else if(arrays[i] > thirdLargest && arrays[i] !== secondLargest && arrays[i] !==largest){
//         thirdLargest = arrays[i];
//     }else if(arrays[i] > forthLargest && arrays[i] !== thirdLargest && arrays[i] !== secondLargest && arrays[i] !==largest){
//         forthLargest = arrays[i];
//     }
// }

// console.log("Largest: ", largest);
// console.log("Second Largest: ", secondLargest);
// console.log("Third largest: ", thirdLargest);
// console.log("forth largest: ", forthLargest);


let arrays = [13, 5, 54, 33, 3, 66, 7, 8, 54];

let largest = -Infinity;
let secondLargest = -Infinity;
let thirdLargest = -Infinity;
let forthLargest = -Infinity;

for (let i = 0; i < arrays.length; i++) {

    if (arrays[i] > largest) {
        forthLargest = thirdLargest;
        thirdLargest = secondLargest;
        secondLargest = largest;
        largest = arrays[i];

    } else if (arrays[i] > secondLargest && arrays[i] !== largest) {
        secondLargest = arrays[i];
    } else if (arrays[i] > thirdLargest && arrays[i] !== secondLargest && arrays[i] !== largest) {
        thirdLargest = arrays[i];
    } else if (arrays[i] > forthLargest && arrays[i] !== thirdLargest && arrays[i] !== secondLargest && arrays[i] !== largest) {
        forthLargest = arrays[i];
    }
}

console.log("Largest: ", largest);
console.log("Second Largest: ", secondLargest);
console.log("Third Largest: ", thirdLargest);
console.log("Fourth Largest: ", forthLargest);


// Reverse string using for loop
let names = "Ganesh pund";
let reverseString = '';

 for(let i = names.length -1; i>= 0; i--){
reverseString += names[i];
 }
 console.log(reverseString);
 
//  reverse array or assending order array
let numb = [1,2,3,4,5,6,7,8,9,10];
let revsArray = [];
for(let i = numb.length-1; i>=0; i--){
revsArray += numb[i];
}
console.log("Reverse Array",revsArray);

// find the min from the array without using inbuild method 
let newArray = [5,34,55,77,77,88,33];
let smalestNo = Infinity;
 for(let i = 0; i <newArray.length; i++){
if(newArray[i] < smalestNo){
    smalestNo = newArray[i];
}
 }
 console.log(smalestNo);
 