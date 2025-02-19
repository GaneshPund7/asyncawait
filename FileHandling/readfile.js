let fs = require("fs");
const { resolve } = require("path");
// alert("File reading is started..!");
async function addFileData() {
    let getFileData = new Promise((resolve, reject) =>{
        fs.readFile("../text.txt", "utf-8", (error, filedata) => {
            try {
                if (filedata) {
                    // console.log(filedata);
                    resolve(filedata);
                    // document.getElementById("filedata").innerHTML = filedata;
                } else {
                    throw new Error("File is not readed..!");
                }
    
            } catch (error) {
                console.error(error.message);
    
            }
            finally {
                console.log("File reading is completed..!");
            }
            // let fileGetedata = await filedata;
    
        });
    })
  

}
addFileData();




function writefile(){
    fs.writeFile("../text.txt", "Hello this is the data of file ", (error) => {
        try {
            if (error) {
                throw new Error("File is not written..!");
            }
        } catch (error) {
            console.error(error.message);
        }
        finally {
            console.log("File is written..!");
        }
    });
}
writefile();
 function name(params) {
    
 }
 
