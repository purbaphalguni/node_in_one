const fs = require('node:fs');
fs.readFile("file.txt","utf-8",(err,data)=>{
    console.log(err,data);
})