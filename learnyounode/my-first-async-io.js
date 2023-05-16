const fs = require('fs') ;
let filePath=process.argv[1];
fs.readFile(filePath,(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        let str= data.toString().split("\n").length-1;
        console.log(str);
    };
});
console.log('wertyuio');