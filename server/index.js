import express from 'express';

const app = express()

app.get('/user/:userId/task',(req,res)=>{
    res.send("Hello User")
})

app.listen(5000,()=>{
    console.log('server is up on port 5000')
})