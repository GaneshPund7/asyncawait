let numbs = [1,4,5,63,2,44,69,67,66,3,355,64,70];

let large = -Infinity;
let secLarge = -Infinity;
let thirdLargest = -Infinity;
for(let i = 0; i < numbs.length; i++){

    if(numbs[i] > large){
        thirdLargest = secLarge;
        secLarge = large;
        large = numbs[i];
    } else if(numbs[i] > secLarge && numbs[i] !==large){
        secLarge = numbs[i];
    } else if( numbs [i] > thirdLargest && numbs[i] !==secLarge && numbs[i] !== large){
        thirdLargest = numbs[i];
    }
}
console.log(large);
console.log(secLarge);
console.log(thirdLargest);

const LargestNo = Math.max(...numbs);

console.log("large",LargestNo);


