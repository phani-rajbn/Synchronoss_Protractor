var fs = require('fs');
var http = require('http');
/* fs.readFile("./coreModule.js", (err, data)=>{
    if(err != undefined)
      console.log(err);
    console.log(data.toString());
}) */

var data = require('./data.json');

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', "*");
    console.log(req.url);
    res.end(JSON.stringify(data));
}).listen(1234);

//console.log(data);

/* fs.writeFileSync("Notex.txt", "Testing notes using Nodejs");
//fs.close();
console.log("testing the last line of code") */