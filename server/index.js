import express from 'express';
import cors from 'cors';

import {fetchTaskList, fetchUserDetails, fetchStandardTaskList, updateStandardTaskStatus} from './src/service/fetchTaskList.js'

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

app.post('/user/:userId/standard-task', async (req, res) => {
  const { userId } = req.params;
  const { date, status } = req.body;
  try {
    await updateStandardTaskStatus(userId, date, status);
    res.status(200).json({ message: 'Standard task status saved successfully.' });
  } catch (error) {
    console.error('Error updating standard task status:', error);
    res.status(500).json({ error: 'Failed to update task status.' });
  }
});


app.listen(5000,()=>{
    console.log('server is up on port 5000')
})