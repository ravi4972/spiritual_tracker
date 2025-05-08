import express from 'express';

import {fetchTaskList, fetchUserDetails} from './src/service/fetchTaskList.js'

const app = express()

app.get('/user/:userId/task',(req,res)=>{

    fetchTaskList().then(data=>res.send(data)).catch((err)=>{
        res.send('Some error occured')
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