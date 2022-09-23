// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const {port = 8000} = process.env;

// function onRequest(req, res){
//     const htmlfile = path.join(PUBLIC_DIRECTORY, 'index.html');
//     const html = fs.readFileSync(htmlfile,'utf-8');
//     res.setHeader('Content-type', 'text/html')
//     res.writeHead(200);
//     res.end(html);
// }


// const server = http.createServer(onRequest);
// server.listen(port, '127.0.0.1', ()=>{
//     console.log("server berjalan di http://127.0.0.1:8000/");
// })