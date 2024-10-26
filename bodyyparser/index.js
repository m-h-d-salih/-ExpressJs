const express=require('express');
const app=express();
const bodyparser=require('body-parser')
app.use(bodyparser.json()); 
app.use(bodyparser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.send('helllo world')
})
app.post('/submit',(req,res)=>{
    res.send(req.body)
    // res.send('data recieved')
})
app.listen(3001)