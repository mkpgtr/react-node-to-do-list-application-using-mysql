const express = require('express');
const cors = require('cors')
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:'tasks'

})

connection.connect(function(err){
    if(err){
        throw err;
    }

    console.log('connected');
})

app.use(cors());


app.use(express.json());

// ! when the allTasks component loads it send a fetch request with method GET. It comes to this endpoint

app.get('/getAllTasks',async (req,res)=>{
   
    connection.query("select * from taskslist", function (err, data, fields) {
        if (err) 
        throw err;
        res.send(data);
      });
        
    });


    // ! when we press the Add Task button on the frontend, request comes to this endpoint

app.post('/createTask',async(req,res)=>{
    console.log(req.body);
    connection.query(`insert into tasksList(taskName) values("${req.body.task}");`)
    res.send('create task');
})

// ! when we press the delete button on the frontend, request comes to this endpoint

app.delete('/deleteTask/:id',(req,res)=>{
    console.log(req.params.id)
    const id = req.params.id;
    connection.query(`delete from taskslist where id=${id}`,(err,res)=>{
        if(err) throw err
    })
    res.json({"msg":"deleted"});

})



app.listen(5000,()=>{
    console.log(`server running on port 5000`);
})