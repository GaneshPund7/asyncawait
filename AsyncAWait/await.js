// const { reject } = require("async");

 async function mumbai() {
    let mumbaiW = new Promise((resolve, reject)=>{
        setTimeout(() =>{
            resolve("27 deg");
        },2000);
    });
    
    let mumbaiWh = await mumbaiW;
    console.log(mumbaiWh);  
}

mumbai();


async function pune() {
    let puneWe = new Promise((reslove, reject) =>{
        setTimeout(() =>{
            reslove("20 deg");
        },4000);
    });
    
    let puneW = await puneWe;
    console.log(puneW);
}
pune();