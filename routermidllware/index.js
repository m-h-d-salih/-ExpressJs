import express from "express";
import router from "./router.js";

const app=express();

app.use('/',router)
app.listen(3000,()=>console.log(`sever listening`))


