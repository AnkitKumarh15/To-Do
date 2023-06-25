// backend
const express =require('express');
const cors = require('cors')
const app = express();

// CRUD API - Create Read Update Delete

app.use(cors());
app.use(express.json());  // till here its basic codes

// let say all task are stored in array
let tasks=[];

app.post('/addtask',(req,res) =>{
    console.log('Inside Post/addtask API',req.body);
    const task={
        text:req.body.text,
        id:req.body.id,
    }
    tasks.push(task);
    console.log(tasks);
    res.status(200).json(task);
})

app.get('/gettask',(req,res)=>{
    console.log('Inside Get/gettask API',tasks);
    res.json(tasks);
})

const port = 1515;
app.listen(port,()=>{
    console.log(`server is running in port ${port}`);
})


