const app=require("express")()
 app.get("/",(req,res)=>{
    res.send("hello mama")
 })
 app.post("/pumpkin",(req,res)=>{
    res.send("hello youre posting ha")
 })
 app.listen(3000,()=>{
    console.log("iam listening")
 })