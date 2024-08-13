const http=require("http")
const port=3000

const requestHandler=(request,response)=>{
    response.end("helo world mmo")
}
const server=http.createServer(requestHandler)
server.listen(port,(err)=>{
    if(err){
        return console.log("error",err)

    }
    console.log("server s listening on",port)
})