async function submit(){

    let BCAStudent = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("First Class student with 90%")
        }, 2000);
    })

    try{
        // let MCAStudents ;
    console.log(MCAStudents);
    }
    catch(error){
        console.log("MCA Student are not present in this clg");
    }
    
    let BCSStudent = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Second Class student with 80%");
        }, 4000);
    })

    let BCAStudents = await BCAStudent;
    let BCSStudents = await BCSStudent;
    console.log(BCAStudents);
    console.log(BCSStudents);   
}

let a = submit().then((a)=>{
    // console.log(a);
})