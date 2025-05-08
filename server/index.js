import express from 'express';

import {fetchTaskList} from './src/service/fetchTaskList.js'

const app = express()

app.get('/user/:userId/task',(req,res)=>{

    fetchTaskList().then(data=>res.send(data)).catch((err)=>{
        res.send('Some error occured')
    })
})

app.listen(5000,()=>{
    console.log('server is up on port 5000')
})