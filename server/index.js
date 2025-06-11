import express from 'express';
import cors from 'cors';

import {fetchTaskList, fetchUserDetails, fetchStandardTaskList} from './src/service/fetchTaskList.js'

const app = express()

app.use(cors())

app.use(express.json())

app.get('/user/:userId/task',(req,res)=>{
    fetchTaskList().then(data=>res.send(data)).catch((err)=>{
        res.send('Some error occured')
    })
})

app.get('/standard-task',(req,res)=>{
    fetchStandardTaskList().then(data=>res.send(data)).catch((err)=>{
        res.send("Some error occured")
    })
})

app.get('/user', (req, res) => {
    const emailId = req.query.email;
    fetchUserDetails(emailId).then(data=>res.send(data))
    .catch((err)=>res.send(err))
  });

app.listen(5000,()=>{
    console.log('server is up on port 5000')
})