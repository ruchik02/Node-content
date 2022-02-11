const http=require('http');
const server=http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url=='/'){
        res.end('hello from home page');
    }
    else if(req.url=='/about'){
        res.end('hello from about page');
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>page not found</h1>");
    }

})
server.listen(8000,"127.0.0.1",()=>{
     console.log("listening to the port 8000");
})