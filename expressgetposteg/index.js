import express from "express"
const app=express();
app.get('/',(req,res)=>{
    try {
        res.send('heloo')
    } catch (error) {
        console.log(error)
    }
})
app.listen(3000,()=>console.log(`listening`))