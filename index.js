let http = require('http');
let fs = require('fs');
let content = `
<h1> Hello World </h1>
<p> This is {Your Name}... </p>`;
fs.writeFile('index.html',content,(err,data)=>{
    console.log('File created !');
});
http.createServer(function(req,res) {
    fs.readFile('index.html',function (err,data) {
        res.writeHead(200 ,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8000);
console.log('server started');