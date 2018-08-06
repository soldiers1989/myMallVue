let http = require("http")
http.createServer((req,res)=>{
  res.statusCode=200
  res.end("11111");
}).listen("57021","127.0.0.1",()=>{
  console.log("监听端口号89021服务启动。。。。。")
})
