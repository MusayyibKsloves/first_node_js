// ------------------------core module------------------- 

const http = require('http');
const fs=require('fs');

//-----------------create server-----------------------

// http.createServer((req,resp)=>{
//     resp.write('this is first node js program');
//     resp.end();
// }).listen(4500);


fs.writeFileSync('file.txt','first txt file');

//-------------------------local module-------------------

const caltr= require('./calculator');

let a=20;
let b=10;

console.log('sum of two number '+caltr.add(a,b));

console.log('subtraction of two number '+caltr.sub(a,b));

console.log('multiplication of two number '+caltr.mul(a,b));

console.log('division of two number '+caltr.div(a,b));


//-------------------------------Use Chalk package----------------
const chalk=require("chalk"); 
console.log(chalk.red("use of chalk package"));
console.log(chalk.bold.bgRed.italic("use of chalk package"));


//--------------------------create simple API-----------------
const data=require('./simpleApi')

http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'applicatio\json'});
    resp.write(JSON.stringify(data))
    resp.end();
}).listen(4500);



//-------------------------commands line input---------------------
 
//console.log(process.argv[3]);

const input=process.argv;

if(input[2]=='add'){
  fs.writeFileSync(input[3],input[4]); // for create file
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);    //for delete file 
}
else{
    console.log('invalid input');
}


//-----------------------create multiple file---------------------
const path=require('path');

const dirPath=path.join(__dirname,'firstdir');
console.warn(chalk.blue(dirPath));

// for(let i=0;i<3;i++){
//     fs.writeFileSync(dirPath+`/file${i}.txt`,'create custom file using fs module');
// }

//-----------------------remove multiple file---------------------

for(let i=0;i<3;i++){
    fs.unlinkSync(dirPath+`/file${i}.txt`);
}