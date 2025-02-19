// What is promise and callback and await and asnyc in js
//  javascript promise holiding the asyncronization oprations like api call and 

// waiting for get file from import 

const { log } = require('console');
let fs = require('fs');
let add = 30;

async function weather() {

    let pune = new Promise((resolve) => {
        setTimeout(() => {
            resolve("30%");
        }, 2000);
    })


    let mumbai = new Promise((resolve) => {
        setTimeout(() => {
            resolve("20%")
        }, 4000);
    })
    console.log("Plese Wait we loading Pune weather:..");
    let pune_Weather = await pune;
    console.log("Pune weather is:", pune_Weather);
    console.log("Plese Wait we loading mumbai weather:..");
    let mumbai_Weather = await mumbai;
    console.log("Mumbai weather is:", mumbai_Weather);
    return [pune_Weather, mumbai_Weather]
}

weather();
